import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

// (Ant Design) useLayoutEffect does nothing on the server 오류 해결
// SSR 일 때 useLayoutEffect 대신 useEffect 사용
// reference: https://stackoverflow.com/questions/58070996
if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

const description =
  'NextJS를 이용해 만든 간단한 맛집 사이트입니다. NextJS의 정적 생성(Static Generation) 방식으로 구현했으며, 모달창에도 하위 경로가 붙는 인스타그램 스타일 모달 라우팅을 적용했습니다.';

// _document.js 역할 : HTMl 문서 전체 설정(meta 태그 등) / 전체 페이지에 적용됨
// _document.js 에선 React Lifecycle Hook, Data Fetching 사용 불가
// _document.js 의 콘솔은 서버에서만 볼 수 있음

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 아이폰 사파리 노치바 배경색 수정 */}
        <meta name="theme-color" content="#28231c" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />

        {/* 오픈그래프 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Awesome Food Store" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/8604840/153217433-8c9572c6-6fa9-4646-b976-2a10de8d6b0e.png"
        />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://awesome-food-store.vercel.app"
        />
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
