const withAntdLess = require('next-plugin-antd-less');

// 1. 플러그인 설정을 변수에 담습니다.
const nextConfig = withAntdLess({
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

// 2. Next.js가 인식하지 못해 에러를 뱉는 키들을 수동으로 삭제합니다.
// (플러그인은 위에서 이미 이 값들을 읽어갔으므로 삭제해도 스타일 적용에는 문제없습니다)
if (typeof nextConfig === 'object') {
  delete nextConfig.lessVarsFilePath;
  delete nextConfig.lessVarsFilePathAppendToEndOfContent;
  delete nextConfig.cssLoaderOptions;
}

// 3. 깨끗해진 설정을 내보냅니다.
module.exports = nextConfig;
