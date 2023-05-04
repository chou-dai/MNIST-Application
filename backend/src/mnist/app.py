import base64
import io
import json
from typing import Any

import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision
from aws_lambda_powertools.utilities.data_classes import (APIGatewayProxyEvent,
                                                          event_source)
from aws_lambda_powertools.utilities.typing import LambdaContext
from PIL import Image
from torch import Tensor

# 画像の名処理を行う関数の定義
image_transforms = torchvision.transforms.Compose(
    [
        torchvision.transforms.ToTensor(),
        torchvision.transforms.Normalize((0.1307,), (0.3081,)),
    ]
)


# ニューラルネットワークの定義
class Net(nn.Module):
    def __init__(self) -> None:
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(1, 6, 5)
        self.pool1 = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.pool2 = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(16 * 4 * 4, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    def forward(self, x: Tensor) -> Tensor:
        x = self.pool1(torch.relu(self.conv1(x)))
        x = self.pool2(torch.relu(self.conv2(x)))
        x = x.view(-1, 16 * 4 * 4)
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        x = self.fc3(x)
        x = torch.softmax(x, dim=1)
        return x


@event_source(data_class=APIGatewayProxyEvent)
def lambda_handler(
    event: APIGatewayProxyEvent, context: LambdaContext
) -> dict[str, Any]:
    body = json.loads(event.body)

    image_bytes = body["imageBase64"].encode("utf-8")
    # 画像データをデコードして読み込み
    image = Image.open(io.BytesIO(base64.b64decode(image_bytes))).convert(mode="L")
    image = image.resize((28, 28))

    model_file = "/opt/ml/model"
    model = Net()
    model.load_state_dict(torch.load(model_file))
    # モデルを評価モードで使用
    model.eval()

    # 順伝播で画像が0~9の確率の推論を行う
    probabilities = model.forward(
        image_transforms(np.array(image)).reshape(-1, 1, 28, 28)
    )[0]
    probability_list = probabilities.tolist()

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps(
            {
                "probability_list": probability_list,
            }
        ),
    }
