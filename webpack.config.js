const path = require('path');
module.exports = {
    // entry：是我們的進入點，我指定路徑是 index.js
    // entry 是一個陣列，根據你的需求，webpack 允許可以有多個進入點，來產生多個 bundle 檔案。
    entry: './src/index.js',
    // output：打包輸出後的檔案，檔名在index後面加了個bundle，來確認它是打包過後的檔案。
    output: {
        // filename:檔案名稱
        filename: 'index.bundle.js',
        // path:存放位置
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 正則式，$ 用以表示以 .css 結尾的檔案，反斜線是跳脫字元
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }

};