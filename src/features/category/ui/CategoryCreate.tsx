import { useForm } from "react-hook-form";

import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Spinner } from "@shared/ui/spinner";

import { categoryCreateModel } from "../model/category-create";

export const CategoryCreate = () => {
	const { handleSubmit, register, formState: { errors } } = useForm<{name: string}>();

	const onSubmit = async (data: { name: string }) => {
		await categoryCreateModel.create(data.name);
	};

	return (
		<form className="flex flex__gap-md flex__start-center" onSubmit={handleSubmit(onSubmit)}>
			<Input {...register('name', { required: true })} title="Имя категории" errorMessage={errors?.name?.message} />
			<Button type="submit" disabled={categoryCreateModel.isLoading}>Сохранить</Button>
			{categoryCreateModel.isLoading && (<Spinner spinnerSize="small" />)}
		</form>
	);
};
