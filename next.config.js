const withAntdLess = require('next-plugin-antd-less');
const path = require('path');

const nextConfig = withAntdLess({
  // 서버 실행에 필요한 파일을 추적하기 위한 기준 루트 디렉토리를 현재 폴더로 설정
  outputFileTracingRoot: path.join(__dirname),

  // --- 플러그인 전용 옵션 ---
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},

  // --- Next.js 전용 옵션 ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },

  webpack(config) {
    return config;
  },
});

if (typeof nextConfig === 'object') {
  delete nextConfig.lessVarsFilePath;
  delete nextConfig.lessVarsFilePathAppendToEndOfContent;
  delete nextConfig.cssLoaderOptions;
}

module.exports = nextConfig;
