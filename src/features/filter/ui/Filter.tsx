import React, { ChangeEvent, FC, useState } from 'react';

import { prices, themes } from '../lib';

import { Flex } from '@shared/ui/flex';
import { Option, Select } from '@shared/ui/select';

import './Filter.scss';

interface IFilterData {
  price: string;
  theme: string;
}

export const Filter: FC = () => {
  const [filterData, setFilterData] = useState<IFilterData>({
    price: '',
    theme: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: keyof IFilterData,
  ) => {
    const { value } = event.target;

    setFilterData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Flex className="flex__gap-md filter">
      <Select
        label="Цена"
        value={filterData.price}
        className="filter__select-price"
        color="purple"
        onChange={(event) => handleChange(event, 'price')}
      >
        {prices.map((price) => (
          <Option key={price} value={price}>
            {price}
          </Option>
        ))}
      </Select>
      <Select
        label="Тема"
        value={filterData.theme}
        className="filter__select-theme"
        color="purple"
        onChange={(event) => handleChange(event, 'theme')}
      >
        {themes.map((theme) => (
          <Option key={theme.id} value={theme.id}>
            {theme.title}
          </Option>
        ))}
      </Select>
    </Flex>
  );
};
