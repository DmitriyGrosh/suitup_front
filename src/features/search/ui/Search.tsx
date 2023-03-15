import React, { FC, useRef, useState } from 'react';

import { useHandleOutside } from '@shared/hooks';

import { Flex } from '@shared/ui/flex';
import { Image } from '@shared/ui/image';
import { Input } from '@shared/ui/input';

import './Search.scss';

export const Search: FC = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => setIsSearchActive((prev) => !prev);
  const handleClose = () => setIsSearchActive(false);

  useHandleOutside(searchContainerRef, handleClose, 'mousedown');

  if (!isSearchActive) {
    return (
      <Flex
        onClick={toggleSearch}
        className="flex__gap-md flex__center-center search"
      >
        <Image
          src="https://api.iconify.design/bi:search.svg?color=%23888888"
          alt="search"
          className="search__image"
        />
        <span>Поиск</span>
      </Flex>
    );
  }

  return (
    <div ref={searchContainerRef}>
      <Input />
    </div>
  );
};
