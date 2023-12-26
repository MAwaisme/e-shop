const webpack = require('webpack');



module.exports = {
    // Webpack configuration goes here

    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
}