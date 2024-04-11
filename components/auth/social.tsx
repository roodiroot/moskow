'use client';

import { signIn } from 'next-auth/react';
import { FaYandex, FaVk } from 'react-icons/fa';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import Button from '../ui/my-components/button';

const Social = () => {
  const onClick = (provider: 'github' | 'yandex' | 'vk') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex gap-x-2 items-center">
      <Button onClick={() => onClick('yandex')} className="w-full">
        <FaYandex className="h-5 w-5 text-red-500" />
      </Button>
      <Button onClick={() => onClick('vk')} className="w-full">
        <FaVk className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
