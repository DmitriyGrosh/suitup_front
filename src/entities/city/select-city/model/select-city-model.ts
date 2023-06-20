import { action, makeObservable, observable } from 'mobx';
import { ChangeEvent } from 'react';

class SelectCityModel {
  city: string | null = null;
  constructor() {
    makeObservable(this, {
      changeCity: action.bound,
      city: observable,
    });
  }

  public changeCity(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value ?? null;

    this.city = e.target.value === '' ? null : currentValue;
  }
}

export const selectCityModel = new SelectCityModel();
