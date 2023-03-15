import React, { forwardRef, InputHTMLAttributes } from 'react';
import { cx } from '@shared/lib/cx';

import './Input.scss';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cx('text-field', className)} {...props} />
));
