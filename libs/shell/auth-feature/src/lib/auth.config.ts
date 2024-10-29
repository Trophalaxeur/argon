import type { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const authConfig = {
  debug: true,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // const isOnLoginPage = nextUrl.pathname.startsWith('/login');
      // if (isLoggedIn && isOnLoginPage) {
      //   return Response.redirect(new URL('/', nextUrl));
      // }
      return isLoggedIn;
    },
  },
  providers: [GitHub, Google], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export const AUTH_PROVIDER_LIST = authConfig.providers.map((provider) => {
  const { id, name } = provider({});
  return { id, name };
});
