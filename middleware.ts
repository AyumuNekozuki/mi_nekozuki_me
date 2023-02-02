import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const url = request.nextUrl.clone();
	url.pathname = '/410.html';

	return NextResponse.rewrite(url, { status: 410, statusText: 'Gone' });
}

export const config = {
	matcher: '/((?!_next/static|_next/image|favicon.ico|410.html).*)',
};
