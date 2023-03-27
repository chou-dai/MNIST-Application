import json
from typing import *


def lambda_handler(event, context) -> Dict[str, Any]:
    status: str = 200
    message: str = "hello world"
    return {
        "statusCode": status,
        "body": json.dumps({
            "message": message,
        }),
    }
