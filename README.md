# AWS SAM Base

## 概要
- AWS SAM (Serverless Application Model) を使用した、APIGateway と Lambda によるサーバーレスな REST API を構築するためのベースプロジェクト
- 開発効率を上げるため、以下の設定を行っている
    - Pipenv による Python パッケージの管理
    - black, isort によるコードの自動整形
    - flake8, mypy, pytest のテストを使用した GitHub Actions による CI

---

## 技術スタック
| 分野 | 使用技術 |
| ---- | ---- |
| 言語 | Python3.9 |
| CLI | AWS CLI, AWS SAM CLI |
| AWSリソース | Lambda, API Gateway, CloudFormation, S3, IAM |
| 自動整形 | black, isort |
| テスト | flake8, mypy, pytest |

---

## 環境構築
#### AWS CLI, AWS SAM CLI のインストール
```
brew tap aws/tap
brew install awscli aws-sam-cli
```
#### Docker のインストール（SAM プロジェクトをビルドする際に使用）
```
brew install --cask docker
```
#### Pipenv のインストール
```
pip install pipenv
```
#### ライブラリのインストール
```
pipenv run install --dev
```

---

## SAM プロジェクト デプロイ手順
#### AWS アクセスキー設定
- アクセスキー作成
    - マネジメントコンソール > IAM > {ユーザー名} > セキュリティ認証情報 > アクセスキー作成
- AWS CLI アクセスキー設定（作成したアクセスキーの登録）
    ```
    aws configure
    ```
#### SAM ビルド
- Docker コンテナ内でビルドするため、Dockerの起動が必要
    ```
    sam build -u
    ```
#### SAM デプロイ
- 初回
    ```
    sam deploy --guided
    ```
- 以降
    ```
    sam deploy
    ```
- エンドポイント確認
    - マネジメントコンソール > API Gateway > {名前} > ステージ > {パス} > URL

---

## SAM プロジェクト ローカル実行（Docker 起動後）
#### SAM ビルド
```
sam build -u
```
#### Lambda 関数実行
```
sam local invoke -e events/{イベント名} {ビルド後のLambda Function名}
```
#### API のエンドポイントを立てる
```
sam local start-api
```
http://127.0.0.1:3000/hello

---

## コードの自動整形・テスト
#### 自動整形
- black ： PEP8（Pythonのコードスタイル）に準拠したコードフォーマット
    ```
    pipenv run black .
    ```
- isort ： import 順序のコードフォーマット
    ```
    pipenv run isort .
    ```
- 上記、自動整形を同時に実行するコマンド（独自定義済み）
    ```
    pipenv run format
    ```
#### テスト（CIで行われるテスト）
- flake8 ： Python コードの静的解析テスト
    ```
    pipenv run flake8 .
    ```
- mypy ： Python 型ヒントのテスト
    ```
    pipenv run mypy .
    ```
- pytest ： Lambda 関数のユニットテスト（tests/ ディレクトリのテスト）
    ```
    pipenv run pytest .
    ```
- 上記、テストを同時に実行するコマンド（独自定義済み）
    ```
    pipenv run test
    ```