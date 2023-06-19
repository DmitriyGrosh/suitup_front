import React, { ButtonHTMLAttributes, FC } from 'react';
import { cx } from '@shared/lib/cx';

import './Button.scss';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={cx('button', className)} {...props}>
      {children}
    </button>
  );
};
