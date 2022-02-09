import { NextResponse } from 'next/server';

export async function middleware(req, _ev) {
  console.log(req);
  const { pathname } = req.nextUrl;
  if (pathname === '/') {
    return NextResponse.redirect('/stores');
  }
  return NextResponse.next();
}
