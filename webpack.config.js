//entry point -> output-file
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log('env', env);
    return {
        entry:'./src/app.js',
    output: {
        path : path.join(__dirname, 'public','dist'), //should be absolute path
        filename: 'bundle.js'
    },
    //we have to use babel in webpack... so whenever their is js file then run it through babel loader and convert it into modules
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,          //anyfile that ends with js forward slash to escape the dot
                exclude: /node-modules/
            },
            {   //css loader takes the css and converts it to js syntax and the style loader takes the js syntaxed css and puts in DOM
                test : /\.s?css$/,  //this will make 's' optional as we are using reset library  ? reps escape char 
                use : CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                    ]
                })
            }
        ]
    },
    plugins: [
        CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', //to get the error in module  like addoption.js not in bunlde.js
    devServer : {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
}
};
