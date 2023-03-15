import React, { FC } from 'react';
import { Flex } from '@shared/ui/flex';

import { useTheme } from '../model';

import './ThemeLayout.scss';
import { cx } from '@shared/lib/cx';

export const ThemeLayout: FC = () => {
  const [theme, changeTheme] = useTheme();

  return (
    <Flex className="theme-layout flex__center-center">
      <label className="theme-layout__label">
        <input
          onChange={changeTheme}
          className="theme-layout__checkbox"
          type="checkbox"
        />
        <span
          className={cx(
            'theme-layout__slider',
            'theme-layout__slider__light',
            theme === 'light',
          )}
        />
      </label>
    </Flex>
  );
};
