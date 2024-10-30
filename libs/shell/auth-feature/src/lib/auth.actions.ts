'use server';

import { ArgonNextAuth } from './middleware';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { AUTH_PROVIDER_LIST } from './auth.config';

const SIGNIN_ERROR_URL = '/login';
const AUTHORIZED_PROVIDERS = AUTH_PROVIDER_LIST.map(({ id }) => id);

export async function signIn(providerId: string) {
  try {
    if (!AUTHORIZED_PROVIDERS.includes(providerId)) {
      throw new AuthError(`Invalid provider: ${providerId}`);
    }
    await ArgonNextAuth.signIn(providerId);
  } catch (error) {
    // Signin can fail for a number of reasons, such as the user
    // not existing, or the user not having the correct role.
    // In some cases, you may want to redirect to a custom error
    if (error instanceof AuthError) {
      return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
    }

    // Otherwise if a redirects happens Next.js can handle it
    // so you can just re-thrown the error and let Next.js handle it.
    // Docs:
    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
    throw error;
  }
}

export async function signOut() {
  try {
    await ArgonNextAuth.signOut();
  } catch (error) {
    // Signin can fail for a number of reasons, such as the user
    // not existing, or the user not having the correct role.
    // In some cases, you may want to redirect to a custom error
    if (error instanceof AuthError) {
      return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
    }

    // Otherwise if a redirects happens Next.js can handle it
    // so you can just re-thrown the error and let Next.js handle it.
    // Docs:
    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
    throw error;
  }
}
