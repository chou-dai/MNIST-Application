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
<img width="711" alt="image" src="https://user-images.githubusercontent.com/89395132/236503151-15499f5e-ef32-44dd-a695-ae8329b2a5c7.png">


## アーキテクチャ
![image](https://user-images.githubusercontent.com/89395132/236503556-c9d8a25c-5948-4737-b531-b0b98f0baab8.png)

