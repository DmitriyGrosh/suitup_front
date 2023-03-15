import React, { FC, ImgHTMLAttributes } from 'react';
import { cx } from '@shared/lib/cx';

import './Image.scss';

export const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  alt,
  ...props
}) => (
  <div className={cx('image', className)}>
    <img {...props} className="image__picture" alt={alt} />
  </div>
);
