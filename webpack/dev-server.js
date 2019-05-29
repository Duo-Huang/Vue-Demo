const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
    proxy: {
        "/twh": {
            target: "http://localhost:3001",
            pathRewrite: { "^/twh": "" }
        }
    }
});

server.listen(4200, () => {
    console.log('Starting server on http://localhost:4200')
})