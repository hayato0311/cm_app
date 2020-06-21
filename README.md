# intern2022_HayatoSato

## 起動のための手順

### デプロイ済みのwebサイトにアクセスする場合
- [https://hayato0311.github.io/cm_app/](https://hayato0311.github.io/cm_app/)にアクセスしていただくと、
作成したプログラムの実行ができます。

### ローカル環境で実行する場合
1. ` git clone https://github.com/hayato0311/cm_app.git`を実行し、プログラムをローカルに保存。
2. 任意の場所で`create-react-app cm_app`を実行。
3. `cd cm_app`を実行する。
4. `rm -r src`を実行する。
5. `cp -r <最初に保存したプログラムのsrcのディレクトリパス>  ./`を実行し、srcに含まれるプログラムを更新。
6. `yarn add node-sass @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons redux react-redux redux-logger redux-persist`を実行。
7. `yarn start`を実行すると作成したプログラムが実行されるので、 [http://localhost:3000](http://localhost:3000) をブラウザで開いてください。