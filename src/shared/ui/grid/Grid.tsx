import React, { FC, HTMLAttributes } from 'react';
import { cx } from '@shared/lib/cx';

import './Grid.scss';

export const Grid: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cx('grid', className)} {...props}>
      {children}
    </div>
  );
};
