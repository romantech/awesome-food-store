import { NextResponse } from 'next/server';

/**
 * A middleware function that rewrites the URL to /stores.
 * {@link https://nextjs.org/docs/pages/building-your-application/routing/middleware#example|for more information on Next.js middleware.}
 *
 * @param {object} req - the request object
 * @param {any} _ev - the event parameter (unused)
 * @return {object} the rewritten URL response
 */
export function middleware(req, _ev) {
  return NextResponse.rewrite(new URL('/stores', req.url));
}

export const config = {
  /**
   * 경로가 / 일 때만 middleware 함수 호출
   * @see https://nextjs.org/docs/pages/building-your-application/routing/middleware#example
   * */
  matcher: '/',
};
