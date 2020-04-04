const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ]
    },
    filenameHashing: false
}