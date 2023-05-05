# MNIST Application

## 概要
- MNIST（Mixed National Institute of Standards and Technology database）による手書き文字認識を用いた識別アプリ。
- CNN ニューラルネットワークにより "0" ~ "9" の手書き文字の推論を行う。
- フロントエンドは React 、バックエンドは AWS サーバレスアーキテクチャ（API Gateway、ECR、Lambda）で構成している。
- Pytorch による CNN モデル構築を行なっている。
- https://mnist-application.vercel.app
<img width="1428" alt="image" src="https://user-images.githubusercontent.com/89395132/236490902-24b4fadb-0f02-4b90-8328-d821a9a9b909.png">



## 技術スタック
| 分野 | 使用技術 |
| ---- | ---- |
| フロントエンド | React(Typescript), Tailwind CSS |
| バックエンド | Lambda(Python), API Gateway, ECR |
| モデル構築 | Pytorch |
| その他 | Neural Network, AWS SAM, Docker |


## MNISTモデル
CNN


## アーキテクチャ
![architecture](https://user-images.githubusercontent.com/89395132/236492743-c13131f7-437d-42ad-9c8d-0482399f4570.png)

