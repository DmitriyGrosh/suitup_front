import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '@shared/ui/flex';

export const Account = () => {
  return (
    <Flex className="flex__column full-width">
      <Flex className="flex__center-center flex__wrap flex__gap-md">
        <Link to="/category">Категории</Link>
        <Link to="/event/add">Создать ивент</Link>
        <Link to="/event/all">Посмотреть мои ивенты</Link>
      </Flex>
    </Flex>
  );
};
