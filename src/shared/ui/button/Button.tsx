import React, { FC, HTMLAttributes } from 'react';
import { cx } from '@shared/lib/cx';

import './Button.scss';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
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
