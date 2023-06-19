import React from 'react';
import { Login } from '@features/auth/login/ui';
import { Flex } from '@shared/ui/flex';
import { Logo } from '@shared/ui/logo';

export const Auth = () => {
  return (
    <Flex className="flex__column full-width full-height flex__center-center flex__gap-md">
      <Logo />
      <span>Suit Up!</span>
      <Login />
    </Flex>
  );
};
