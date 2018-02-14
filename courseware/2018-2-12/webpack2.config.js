module.exports={
  entry: `${__dirname}/src/3.js`,
  output: {
    filename: '3.bundle.js',
    path: `${__dirname}/dist/`      //绝对：__dirname
  },
  //模块(插件)
  module: {
    rules: [
      {
        test: /\.css$/i,         //正则
        use:  ['style-loader', 'css-loader']
      }
    ]
  }
};
