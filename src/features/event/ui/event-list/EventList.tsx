import React from 'react';

import { Grid } from '@shared/ui/grid';
import { list } from '@features/filter/lib';

import { EventPreview } from '../event-preview';

import './EventList.scss';

export const EventList = () => {
  return (
    <Grid>
      {list.map((el) => (
        <EventPreview
          key={el.id}
          title={el.title}
          address={el.address.city}
          organisationName={el.organization.name}
          startDate={el.startDate}
          endDate={el.endDate}
          organisationLogo={el.organization.logo}
          poster={el.organization.poster}
        />
      ))}
    </Grid>
  );
};
