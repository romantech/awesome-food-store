const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },

  webpack(config) {
    return config;
  },
});
