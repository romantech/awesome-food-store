import { NextResponse } from 'next/server';

export function middleware(req, _ev) {
  return NextResponse.rewrite(new URL('/stores', req.url));
}

export const config = {
  /*
   * 경로가 / 일 때만 middleware 함수 호출
   * @see https://nextjs.org/docs/pages/building-your-application/routing/middleware#example
   * */
  matcher: '/',
};
