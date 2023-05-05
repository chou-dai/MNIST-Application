# MNIST Application

## 概要
- MNIST：手書き数字の識別アプリ。
- CNN ニューラルネットワークで構築されたモデルにより "0" から "9" の手書き文字の推論を行う。
- モデル構築には Pytorch を使用し、フロントエンドは React、バックエンドは AWS サーバレスアーキテクチャで構成。

![preview](https://user-images.githubusercontent.com/89395132/236490902-24b4fadb-0f02-4b90-8328-d821a9a9b909.png)


## 技術スタック
| 分野 | 使用技術 |
| ---- | ---- |
| フロントエンド | React(Typescript), Tailwind CSS |
| バックエンド | Lambda(Python), API Gateway, ECR |
| モデル構築 | Pytorch |
| その他 | AWS SAM, Docker |


## MNISTモデル
- (畳み込み層 + Maxプーリング層) × 2 + 全結合層 × 3
- 各レイヤーのニューロンにおける活性化関数は ReLU 関数を用い、最終レイヤーでは Softmax 関数を用いる。
- 損失関数はクロスエントロピー損失関数、最適化アルゴリズムは SGD を用いる。

![model](https://user-images.githubusercontent.com/89395132/236503151-15499f5e-ef32-44dd-a695-ae8329b2a5c7.png)


## アーキテクチャ
![architecture](https://user-images.githubusercontent.com/89395132/236503556-c9d8a25c-5948-4737-b531-b0b98f0baab8.png)
1. エンドユーザー：手書き数字入力
2. フロントエンド：手書き数字を Base64 形式の画像データへエンコード
3. フロントエンド：リクエストボディに Base64 形式画像データを含めバックエンドへ POST
4. バックエンド：API Gateway でリクエストを受理し、Lambda のイベントを発火
5. バックエンド：Lambda で CNN モデルを用いて、画像データがどの数字であるかの確率を算出
6. バックエンド：各数字の確率のリストをフロントエンドへレスポンスを返す
7. フロントエンド：確率リストから円グラフを生成し、最も確率が高いものを結果として出力
