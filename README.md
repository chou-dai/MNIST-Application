# MNIST Application

## 概要
- MNIST：手書き数字の識別アプリ。
- CNN で構築されたモデルにより "0" から "9" の手書き文字の推論を行う。
- モデル構築には PyTorch を使用し、フロントエンドは React、バックエンドは AWS サーバレスアーキテクチャで構成。

![preview](https://user-images.githubusercontent.com/89395132/236676449-17dabd7a-6ce1-4fe1-b250-c41e5d8e98b2.png)


---

## 技術スタック
| 分野 | 使用技術 |
| ---- | ---- |
| フロントエンド | React(Typescript), Tailwind CSS |
| バックエンド | Lambda(Python), API Gateway, ECR |
| モデル構築 | PyTorch |
| その他 | AWS SAM, Docker |


---


## CNN モデル
![model](https://user-images.githubusercontent.com/89395132/236506173-6b3f5226-c174-4d2c-b682-ac432472f9d3.png)
- (畳み込み層 + Maxプーリング層) × 2 + 全結合層 × 3
- 活性化関数：最終層 Softmax 関数、それ以外 ReLU 関数。
- 損失関数：クロスエントロピー損失関数
- 最適化アルゴリズム：SGD


---


## アーキテクチャ
![architecture](https://user-images.githubusercontent.com/89395132/236503556-c9d8a25c-5948-4737-b531-b0b98f0baab8.png)
1. エンドユーザー：手書き数字入力
2. フロントエンド：手書き数字を Base64 形式の画像データへエンコード
3. フロントエンド：リクエストボディに Base64 形式画像データを含めバックエンドへ POST
4. バックエンド：API Gateway でリクエストを受理し、Lambda のイベントを発火
5. バックエンド：Lambda で CNN モデルを用いて、画像データがどの数字であるかの確率を算出
6. バックエンド：各数字の確率のリストをフロントエンドへレスポンスを返す
7. フロントエンド：確率リストから円グラフを生成し、最も確率が高いものを結果として出力
