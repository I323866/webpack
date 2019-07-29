module.exports = {
    // 入口文件
    entry: "./src/greeter.ts",
    // 输出文件和目录
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // 打开 sourcemaps 调试 webpack 的输出
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".html"]
    },

    module: {
        rules: [
            // '.ts' or '.tsx' 后缀的文件将被 loadr 'awesome-typescript-loader' 处理。
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // 所有输出的 '.js' 有 sourcemaps 的文件将被 'source-map-loader' 预处理。
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};