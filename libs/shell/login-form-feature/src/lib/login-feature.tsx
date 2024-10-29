'use client';

import * as React from 'react';

import { Button } from '@argon/shared-shadcn-components-ui';
import { Loader } from 'lucide-react';
import { cn } from '@argon/shared-shadcn-utils-ui';
import Image from 'next/image';
import googleIcon from '../icons/google.svg';
import githubIcon from '../icons/github.svg';
import { AUTH_PROVIDER_LIST, signIn } from '@argon/shell-auth-feature';

type LoginFormFeatureProps = React.HTMLAttributes<HTMLDivElement>;

const PROVIDER_ICON = {
  github: githubIcon,
  google: googleIcon,
};

export function LoginFormFeature({
  className,
  ...props
}: LoginFormFeatureProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function callSignIn(providerId: string) {
    console.log('callSignIn', providerId);
    setIsLoading(true);
    signIn(providerId);
    setIsLoading(false);
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign up to access your account
        </h1>
      </div>

      {AUTH_PROVIDER_LIST.map(({ id, name }) => (
        <div key={id} className={cn('flex gap-6', className)} {...props}>
          <Button
            className="flex flex-1"
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={callSignIn.bind(null, id)}
          >
            {isLoading ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Image
                className="invert mr-2 h-4 w-4"
                src={PROVIDER_ICON[id]}
                alt={name}
              />
            )}{' '}
            Sign in with {name}
          </Button>
        </div>
      ))}
    </>
  );
}
