import { prisma } from '@argon/shell-prisma-shell-utils';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

const LOGIN_PAGE = '/login';
const HOME_PAGE = '/';

export const authConfig = {
  debug: true,
  pages: {
    signIn: LOGIN_PAGE,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const callback = nextUrl.searchParams.get('callbackUrl') || undefined;
      const isLoggedIn = !!auth?.user;
      console.log('callback', isLoggedIn, callback);
      const isOnLoginPage = nextUrl.pathname.startsWith(LOGIN_PAGE);
      if (isLoggedIn && isOnLoginPage) {
        return Response.redirect(new URL(HOME_PAGE, callback));
      }
      return isLoggedIn;
    },
  },
  providers: [GitHub, Google], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export const authConfigWithPrisma = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
} satisfies NextAuthConfig;

export const AUTH_PROVIDER_LIST = authConfig.providers.map((provider) => {
  const { id, name } = provider({});
  return { id, name };
});
