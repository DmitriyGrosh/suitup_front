import React, { FC, HTMLAttributes } from 'react';
import { cx } from '@shared/lib/cx';

import './Avatar.scss';

interface IAvatar extends HTMLAttributes<HTMLDivElement> {
  image?: string;
}

export const Avatar: FC<IAvatar> = ({
  className,
  children,
  image,
  ...props
}) => (
  <div className={cx('avatar', className)} {...props}>
    {!!image ? (
      <img className="avatar__image" src={image} alt="logo" />
    ) : (
      <>{children}</>
    )}
  </div>
);
