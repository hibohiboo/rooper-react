# docker-hubからnode入りコンテナを取得
# https://hub.docker.com/_/node/
FROM node:7.2.1

# コンテナ上の作業ディレクトリ作成
WORKDIR /my_webpack

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# jsViewライブラリreact
RUN npm i --save react
RUN npm i --save react-dom

# jsフレームワークredux
RUN npm i --save redux
RUN npm i --save react-redux

# typescript
RUN npm i --save-dev typescript@next

# ビルドツール
RUN npm i --save-dev webpack@2.2.0-rc.0

# 開発用サーバ
RUN npm i --save-dev webpack-dev-server@2.2.0-rc.0

# es6トランスパイラ
RUN npm i --save babel-polyfill
RUN npm i --save-dev babel-core 
RUN npm i --save-dev babel-preset-es2015
RUN npm i --save-dev babel-preset-stage-0
RUN npm i --save-dev babel-preset-react

# webpack用babel loader
RUN npm i --save-dev babel-loader

# webpack用typescript loader
RUN npm i --save-dev ts-loader

# typescriptの型定義ファイル
RUN npm i --save-dev @types/react
RUN npm i --save-dev @types/react-dom
RUN npm i --save-dev @types/redux
RUN npm i --save-dev @types/react-redux

# httpライブラリ axios
RUN npm i --save axios

RUN npm i --save-dev @types/axios
