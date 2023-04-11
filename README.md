# AWS SAM Base

## 概要
- AWS SAM (Serverless Application Model) を使用した、APIGateway と Lambda によるサーバーレスな REST API を構築するためのベースプロジェクト
- 開発効率を上げるため、以下の設定を行っている
  - Pipenv による Python パッケージの管理
  - black, isort によるコードの自動整形
  - flake8, mypy, pytest のテストを使用した GitHub Actions による CI

## 技術スタック
| 分野 | 使用技術 |
| ---- | ---- |
| 言語 | Python3.9 |
| CLI | AWS CLI, AWS SAM CLI |
| AWSリソース | Lambda, API Gateway, CloudFormation, S3 |
| 自動整形 | black, isort |
| テスト | flake8, mypy, pytest |

## 環境構築
#### AWS CLI, AWS SAM CLI のインストール
```
brew tap aws/tap
brew install aws-sam-cli
```
### Docker のインストール（SAM プロジェクトをビルドする際に使用）
```
brew install --cask docker
```
### Pipenv のインストール
```
pip install pipenv
```
### ライブラリのインストール
```
pipenv run install --dev
```