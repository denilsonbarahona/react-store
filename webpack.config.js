const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    /*****el entry es el archivo raíz del proyecto****/
    entry: './src/index.js',
    /*****es el archivo de salida del empaquetador*****/
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "./",
    },
    /**** son las extensiones que se permitiran usar en 
     * en el proyecto ( para que webpack reconozaca los elementos)
     * *****/
    mode:'development',
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@icons": path.resolve(__dirname, "src/assets/icons/"),
            "@logos": path.resolve(__dirname, "src/assets/logos/"),
        }
    },
    /**configuraciones de loaders
     * para que se reconzcan todos los archivos de js como de html.
     */
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                type: "asset",
            }
        ]
    },
    /**
     * la utilización de plugins para reconocer los archivos
     * y que se puedan empaquetar.
     */
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress:true,
        port: 3005,
        historyApiFallback:true,
    }
}