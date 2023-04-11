import json
from typing import Any


def lambda_handler(event, context) -> dict[str, Any]:
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
