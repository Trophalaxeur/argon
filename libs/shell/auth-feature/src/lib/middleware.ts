import NextAuth from 'next-auth';
import { authConfig, authConfigWithPrisma } from './auth.config';

export const ArgonNextAuth = NextAuth(authConfigWithPrisma);
export const ArgonNextAuthWithoutPrisma = NextAuth(authConfig);

export const argonMiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
