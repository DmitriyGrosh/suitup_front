import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import { Flex } from "@shared/ui/flex";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Option, Select } from "@shared/ui/select";

import { eventAddModel } from "../model/event-add-model";
import { eventSchema, TEventAddSchema } from "../lib/event.schema";

import './EventAdd.scss';

export const EventAdd = observer(() => {
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(eventSchema) });
	const cities = ['Ростов-на-Дону', 'Таганрог', 'Краснодар'];

	const onSubmit = async (data: TEventAddSchema) => {
		await eventAddModel.create(data);
		console.log('==========>data', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="event-add-container">
			<Flex className="flex__column flex__gap-md">
				<Input {...register('title')} title="Название" errorMessage={errors?.title?.message} className="full-width" />
				<Input {...register('description')} title="Описание" errorMessage={errors?.description?.message} className="full-width" />
				<Input type="file" {...register('logo')} title="Лого" errorMessage={errors?.logo?.message} className="full-width" />
				<Input type="datetime-local" {...register('startDate')} title="Начало" errorMessage={errors?.startDate?.message} className="full-width" />
				<Input type="datetime-local" {...register('endDate')} title="Конец" errorMessage={errors?.endDate?.message} className="full-width" />
				<Input type="number" {...register('minPrice')} title="Минимальная цена" errorMessage={errors?.minPrice?.message} className="full-width" />
				<Input type="number" {...register('maxPrice')} title="Максимальная цена" errorMessage={errors?.maxPrice?.message} className="full-width" />
				<Input type="number" {...register('ticketsNumber')} title="Число мест" errorMessage={errors?.ticketsNumber?.message} className="full-width" />
				<Select {...register('address.city')} title="Город" value="Ростов-на-Дону" color="purple" className="full-width">
					{cities.map((city) => (
						<Option key={city} value={city}>
							{city}
						</Option>
					))}
				</Select>
				<Input {...register('address.street')} title="Улица" errorMessage={errors?.address?.street?.message} className="full-width" />
				<Input type="email" {...register('email')} title="Почта" errorMessage={errors?.email?.message} className="full-width" />
				<Input type="tel" {...register('phone')} title="Телефон" errorMessage={errors?.phone?.message} className="full-width" />
				<Button type="submit">
					Cоздать
				</Button>
			</Flex>
		</form>
	);
});
