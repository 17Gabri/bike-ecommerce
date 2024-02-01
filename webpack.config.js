const path = require('path');

module.exports = {
    entry: './assets/js/main.js', // Archivo JS principal
    output: {
        path: path.resolve(__dirname, 'public/build/js'), // Carpeta de salida
        filename: 'bundle.js', // Nombre del archivo de salida
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Archivos SCSS
                use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders para SCSS
            },
            {
                test: /\.js$/, // Archivos JS
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Loader para JS (Babel)
                    options: {
                        presets: ['@babel/preset-env'], // Presets de Babel
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i, // Archivos de imágenes y fuentes
                type: 'asset/resource',
                generator: {
                    filename: '[name].[ext]', // Nombre de archivo de salida
                    outputPath: '../images', // Carpeta de salida
                },
            },
        ],
    },
};
