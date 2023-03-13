import React, { FC } from 'react';
import { Logo } from '@shared/ui/logo';
import { Flex } from '@shared/ui/flex';
import { ThemeLayout } from '@entities/theme-layout';

export const Header: FC = () => {
  return (
    <header className="flex flex__between-center">
      <Flex className="flex__center-center flex__gap-sm">
        <Logo />
        <span>Suit Up!</span>
      </Flex>
      <ThemeLayout />
    </header>
  );
};
