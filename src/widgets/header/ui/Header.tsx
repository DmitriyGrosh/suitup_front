import React, { FC } from 'react';

import { ThemeLayout } from '@entities/theme-layout';

import { Logo } from '@shared/ui/logo';
import { Flex } from '@shared/ui/flex';
import { Button } from '@shared/ui/button';
import { Option, Select } from '@shared/ui/select';

import './Header.scss';

export const Header: FC = () => {
  const cities = ['Ростов-на-Дону', 'Таганрог', 'Краснодар'];

  return (
    <header className="header flex flex__between-center">
      <Flex className="flex__center-center flex__gap-md">
        <Logo />
        <span>Suit Up!</span>
        <Select value="Ростов-на-Дону" color="purple">
          {cities.map((city) => (
            <Option key={city} value={city}>
              {city}
            </Option>
          ))}
        </Select>
      </Flex>
      <Flex className="flex__gap-sm">
        <Button>Войти</Button>
        <Button>Создать событие</Button>
        <ThemeLayout />
      </Flex>
    </header>
  );
};
