import { NextResponse } from 'next/server';

export async function middleware(req, _ev) {
  const { pathname } = req.nextUrl;
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/stores', req.url));
  }
  return NextResponse.next();
}
