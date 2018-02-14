module.exports={
  entry: `${__dirname}/src/4.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build/static/`      //绝对：__dirname
  },
  //模块(插件)
  devServer: {
    contentBase: './build/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,         //正则
        use:  ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|jpeg|gif|tif|psd|ico)/i,
        use:  ['file-loader']
      }
    ]
  }
};
