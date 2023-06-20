import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Grid } from '@shared/ui/grid';
import { selectCityModel } from '@entities/city/select-city/model/select-city-model';

import { EventPreview } from '../../ui/event-preview';
import { eventListModel } from '../model/event-list-model';

import './EventList.scss';

export const EventList = observer(() => {
  useEffect(() => {
    const initData = async () => {
      await eventListModel.getAll();
    };

    initData();
  }, []);

  const filteredList = eventListModel.eventList.filter(
    (el) =>
      el.author.address.city === selectCityModel.city ||
      selectCityModel.city === null,
  );

  return (
    <Grid className="event-list">
      {filteredList.map((el) => (
        <EventPreview
          key={el._id}
          title={el.title}
          address={el?.author?.address?.city}
          organisationName={el?.author?.username}
          startDate={el?.startDate}
          endDate={el?.endDate}
          organisationLogo="https://ucare.timepad.ru/4a79bf46-7ab8-45c7-b88b-bc7aba060085/-/preview/308x600/-/format/jpeg/"
          poster="https://ucare.timepad.ru/b709b204-38a4-4ff8-a589-36b5da53b185/-/format/jpeg/poster_org_46352.jpg"
        />
      ))}
    </Grid>
  );
});
