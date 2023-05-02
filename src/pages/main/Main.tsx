import React, { FC } from 'react';
import { Flex } from '@shared/ui/flex';
import { Filter } from '@features/filter';
import { EventList } from '@features/event/ui';

export const Main: FC = () => {
  return (
    <Flex className="flex__column flex__center-start container">
      <Filter />
      <Flex className="flex__center-center full-width">
        <EventList />
      </Flex>
    </Flex>
  );
};
