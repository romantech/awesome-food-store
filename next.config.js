const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // Or better still you can specify a path to a file
  lessVarsFilePath: './styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
