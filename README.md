# Vue-Flask-Docker_sample

- 参考記事（[Vue + Flask on Docker - Qiita](https://qiita.com/kasayu/items/43734e570dc458a5be15)）をやってみた

# 環境構築

```
$ git clone <REPOSITORY_URL>
$ docker-compose up -d --build
```

# 実行方法

1. webコンテナでの準備
```
$ cd /home
$ vue init webpack web
--- 質問は全部デフォルト設定でOK ---
$ cd /home/web
$ npm install axios  // axiosはVueにもともと入っていないので追加でインストール
$ npm run build
$ npm run dev
```

2. modelコンテナでの準備
```
$ python src/app.py
```

3. `localhost:8080/home` へアクセスすると，占いのできるWebアプリが遊べる

# つまづいたところ

- [Dockerfile_node](https://qiita.com/kasayu/items/43734e570dc458a5be15#dockerfile_node)
    - nodeのバージョンが古くてエラーが出たので新しくした

- [3. frontend/src/components/index.js の変更](https://qiita.com/kasayu/items/43734e570dc458a5be15#3-frontendsrccomponentsindexjs-%E3%81%AE%E5%A4%89%E6%9B%B4)
    - `components` ディレクトリではなく `router` ディレクトリ

- [4. frontend/src/components/Home.vue の作成](https://qiita.com/kasayu/items/43734e570dc458a5be15#4-frontendsrccomponentshomevue-%E3%81%AE%E4%BD%9C%E6%88%90)
    - `<template>` の `randomNumber` → `randomNum`
    - `<template>` の `</div>`が1つ多い
    -  `data()` の `randomNum: 0,` の末尾の`,`は不要
