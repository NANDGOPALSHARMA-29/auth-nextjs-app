import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path==='/login' || path==='/signup' || path==='/';
    const token = request.cookies.get('token')?.value;
    if (isPublicPath || token) {
        return NextResponse.next();
    }
    if(!isPublicPath && !token){
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login',
    '/signup',
  ],
}