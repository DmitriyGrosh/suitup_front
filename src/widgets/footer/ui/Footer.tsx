import React, { FC } from 'react';
import { Legal } from '@widgets/footer/ui/Legal';
import { News } from '@widgets/footer/ui/News';
import { Nav } from '@widgets/footer/ui/Nav';

import './Footer.scss';

export const Footer: FC = () => {
  return (
    <footer className="footer container flex flex__column flex__gap-md">
      <Nav />
      <News />
      <Legal />
    </footer>
  );
};
