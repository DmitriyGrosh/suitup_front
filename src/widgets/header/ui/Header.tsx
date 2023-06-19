import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeLayout } from '@entities/theme-layout';

import { Logo } from '@shared/ui/logo';
import { Flex } from '@shared/ui/flex';
import { Button } from '@shared/ui/button';
import { Option, Select } from '@shared/ui/select';
import { Popover } from '@shared/ui/popover';

import { Search } from '@features/search';
import { viewerModel } from '@entities/viewer';

import './Header.scss';

export const Header: FC = () => {
  const { isAuth, viewer, logout } = viewerModel.useAuth();
  const navigate = useNavigate();
  const cities = ['Ростов-на-Дону', 'Таганрог', 'Краснодар'];

  const handleRedirect = () => {
    if (!isAuth) {
      navigate('/auth');
    }
  };

  return (
    <header className="header flex flex__between-center flex__wrap">
      <Flex className="flex__center-center flex__gap-md flex__wrap">
        <Logo />
        <span>Suit Up!</span>
        <Select value="Ростов-на-Дону" color="purple">
          {cities.map((city) => (
            <Option key={city} value={city}>
              {city}
            </Option>
          ))}
        </Select>
        <Search />
      </Flex>
      <Flex className="flex__gap-md flex__center-center">
        {isAuth ? (
          <Popover title={<h3>{viewer.username}</h3>}>
            <Flex className="flex__column">
              <span onClick={logout}>Выйти</span>
            </Flex>
          </Popover>
        ) : (
          <Button onClick={handleRedirect}>Войти</Button>
        )}
        <Button onClick={handleRedirect}>Создать событие</Button>
        <ThemeLayout />
      </Flex>
    </header>
  );
};
