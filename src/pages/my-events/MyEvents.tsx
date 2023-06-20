import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { EventPreview } from '@features/event/ui/event-preview';
import { Grid } from '@shared/ui/grid';
import { viewerModel } from '@entities/viewer';
import { eventListModel } from '@features/event/event-list/model/event-list-model';
import { selectCityModel } from '@entities/city/select-city/model/select-city-model';
import { Flex } from '@shared/ui/flex';

export const MyEvents = observer(() => {
  const { viewer } = viewerModel.useAuth();
  console.log('==========>viewer', viewer);
  console.log('==========>eventListModel.eventList', eventListModel.eventList);

  const filteredList = eventListModel.eventList.filter(
    (el) =>
      el.author._id === viewer.id &&
      (el.author.address.city === selectCityModel.city ||
        selectCityModel.city === null),
  );

  useEffect(() => {
    const initData = async () => {
      await eventListModel.getAll();
    };

    initData();
  }, []);

  return (
    <Flex className="flex__column flex__gap-md">
      <h1>Мои ивенты</h1>
      <Grid>
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
    </Flex>
  );
});
