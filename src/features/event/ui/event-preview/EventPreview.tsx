import React, { FC } from 'react';

import { Flex } from '@shared/ui/flex';

import './EventPreview.scss';

interface IEventPreview {
  title: string;
  address: string;
  organisationName: string;
  startDate: string;
  endDate: string;
  organisationLogo: string;
  poster: string;
}

export const EventPreview: FC<IEventPreview> = ({
  title,
  organisationName,
  startDate,
  endDate,
  organisationLogo,
  poster,
  address,
}) => {
  return (
    <Flex className="flex__column flex__gap-md event-preview">
      <div className="event-preview__poster">
        <img src={poster} alt="poster" />
      </div>
      <Flex className="flex__column flex__gap-sm event-preview__info">
        <Flex className="flex__start-center flex__gap-sm">
          <div className="event-preview__info__logo">
            <img src={organisationLogo} alt="company name" />
          </div>
          <div className="event-preview__info__name">{organisationName}</div>
        </Flex>
        <div className="event-preview__info__title">{title}</div>
        <div className="event-preview__info__city">{address}</div>
        <div className="event-preview__info__date">
          {startDate}-{endDate}
        </div>
      </Flex>
    </Flex>
  );
};
