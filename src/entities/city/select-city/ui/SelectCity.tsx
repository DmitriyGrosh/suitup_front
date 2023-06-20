import React from 'react';
import { Option, Select } from '@shared/ui/select';

import { selectCityModel } from '../model/select-city-model';

export const SelectCity = () => {
  const cities = [
    { name: 'Ростов-на-Дону', value: 'Ростов-на-Дону' },
    { name: 'Таганрог', value: 'Таганрог' },
    { name: 'Краснодар', value: 'Краснодар' },
    { name: 'Все', value: null },
  ];

  console.log('==========>selectCityModel.city', selectCityModel.city);
  return (
    <Select
      onChange={selectCityModel.changeCity}
      value={selectCityModel.city}
      color="purple"
    >
      {cities.map((city) => (
        <Option key={city.name} value={city.value}>
          {city.name}
        </Option>
      ))}
    </Select>
  );
};
