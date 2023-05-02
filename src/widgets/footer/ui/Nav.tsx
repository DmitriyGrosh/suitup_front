import React from 'react';
import { Link } from 'react-router-dom';

import { Flex } from '@shared/ui/flex';

export const Nav = () => {
  return (
    <Flex className="flex__between-center full-width">
      <Flex className="flex__column flex__gap-md">
        <h3>Афиша событий</h3>
        <Link to="">Рекомендуемое</Link>
        <Link to="">Подписки</Link>
      </Flex>
      <Flex className="flex__column flex__gap-md">
        <h3>Организаторам</h3>
        <Link to="">Создать событие</Link>
        <Link to="">Тарифы</Link>
        <Link to="">Возможности</Link>
      </Flex>
      <Flex className="flex__column flex__gap-md">
        <h3>Suit Up!</h3>
        <Link to="">О нас</Link>
        <Link to="">Блог</Link>
        <Link to="">Контакты</Link>
      </Flex>
    </Flex>
  );
};
