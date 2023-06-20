import { makeAutoObservable, runInAction } from 'mobx';

import { createEvent, CreateEventBody } from '@shared/api/event';
import { SERVICE_RESULT_TYPE } from '@shared/api/types';

import { TEventAddSchema } from '../lib/event.schema';

class EventAddModel {
  public isLoading = false;
  public data: any = null;
  public error: null | string = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async create(data: TEventAddSchema) {
    this.isLoading = true;

    const prepareData: CreateEventBody = {
      email: data.email,
      endDate: data.endDate,
      title: data.title,
      maxPrice: data.maxPrice,
      minPrice: data.minPrice,
      description: data.description,
      phone: data.phone,
      startDate: data.startDate,
      ticketsNumber: data.ticketsNumber,
      content: '',
      categories: [],
    };

    const createResult = await createEvent(prepareData);

    if (createResult.type === SERVICE_RESULT_TYPE.SUCCESS) {
      runInAction(() => {
        this.isLoading = false;
        this.error = null;
        this.data = createResult.data;
      });
    }

    if (createResult.type === SERVICE_RESULT_TYPE.FAILURE) {
      runInAction(() => {
        this.isLoading = false;
        this.error = createResult.data;
      });
    }
  }
}

export const eventAddModel = new EventAddModel();
