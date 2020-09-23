import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  mode:'none',
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    library: 'starWarsNames',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
