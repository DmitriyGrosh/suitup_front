import React, { FC, HTMLAttributes } from 'react';

import { Avatar } from '../avatar';

import logo from '@assets/logo.png';

import './Logo.scss';

export const Logo: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => (
  <Avatar image={logo} {...props} />
);
