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
<img width="1012" alt="image" src="https://user-images.githubusercontent.com/89395132/236502858-47777cae-bbd8-4236-bf08-6c5971433392.png">


## アーキテクチャ
![architecture](https://user-images.githubusercontent.com/89395132/236492743-c13131f7-437d-42ad-9c8d-0482399f4570.png)

