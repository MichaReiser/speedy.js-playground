const path = require("path");

module.exports = {
    devtool: "#source-map",
    entry: "./index.ts",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "playground.js"
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /-spdy\.ts$/
            },
            {
                test: /-spdy.ts$/,
                loader: "speedyjs-loader",
            }
        ]
    },
    node: {
        fs: "empty",
        path: "empty"
    },
    devServer: {
        compress: true
    }
};
