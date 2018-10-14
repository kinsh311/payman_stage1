//entry point -> output-file
const path = require('path');

module.exports={
    entry:'./src/app.js',
    output: {
        path : path.join(__dirname, 'public'), //should be absolute path
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
                use : [
                    'style-loader',
                    'css-loader', // for css loader 
                    'sass-loader' //sass loader takes node-sass loader to convert it into css
                ]

            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', //to get the error in module  like addoption.js not in bunlde.js
    devServer : {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
    
};