import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLocales = ['en', 'pt'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  let locale = request.cookies.get('locale')?.value;

  if (!locale || !supportedLocales.includes(locale)) {
    const acceptLanguage = request.headers.get('accept-language');

    locale = defaultLocale;

    if (acceptLanguage) {
      const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];

      if (supportedLocales.includes(preferredLocale)) {
        locale = preferredLocale;
      }
    }

    const response = NextResponse.next();

    response.cookies.set('locale', locale, { path: '/' });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
};
