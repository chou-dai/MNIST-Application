import json
from typing import Any

from aws_lambda_powertools.utilities.data_classes import (APIGatewayProxyEvent,
                                                          event_source)
from aws_lambda_powertools.utilities.typing import LambdaContext


@event_source(data_class=APIGatewayProxyEvent)  # type: ignore
def lambda_handler(
    event: APIGatewayProxyEvent, context: LambdaContext
) -> dict[str, Any]:
    status: int = 200
    message: str = "hello world"
    return {
        "statusCode": status,
        "body": json.dumps(
            {
                "message": message,
            }
        ),
    }
