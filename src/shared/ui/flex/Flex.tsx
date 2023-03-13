import React, { FC, HTMLAttributes } from 'react';

import { cx } from '@shared/lib/cx';

import './Flex.scss';

export const Flex: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cx('flex', className)} {...props}>
      {children}
    </div>
  );
};
