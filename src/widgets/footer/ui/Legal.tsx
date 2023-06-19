import React from 'react';
import { Link } from 'react-router-dom';

import { Flex } from '@shared/ui/flex';

export const Legal = () => (
  <Flex className="flex__column flex__gap-sm footer__legal">
    <span>© ООО «Cьютап Лтд» 2019–2023</span>
    <span>
      Продолжая работу с нашим сайтом, вы подтверждаете согласие с{' '}
      <Link to="/">правилами его использования</Link>
    </span>
  </Flex>
);
