import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@shared/ui/button";
import { Flex } from "@shared/ui/flex";
import { Input } from "@shared/ui/input";
import { viewerModel } from "@entities/viewer";

import { registerSchema, TRegisterSchema } from "../lib/register.schema";
import { registerModel } from "../model/register-model";

export const Register = () => {
	const { login } = viewerModel.useAuth();
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });

	const onSubmit = async (data: TRegisterSchema) => {
		await registerModel.register(data);
	};

	const handleRedirect = () => {
		navigate('/auth');
	};

	useEffect(() => {
		if (registerModel.data) {
			login(registerModel.data);
		}
	}, [registerModel.data]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Flex className="flex__column flex__gap-md">
				<Input {...register('username')} title="Username" errorMessage={errors?.user?.message} />
				<Input {...register('firstName')} title="Имя" errorMessage={errors?.firstName?.message} />
				<Input {...register('lastName')} title="Фамилия" errorMessage={errors?.lastName?.message} />
				<Input {...register('city')} title="Город" errorMessage={errors?.city?.message} />
				<Input {...register('street')} title="Улица" errorMessage={errors?.street?.message} />
				<Input type="email" {...register('email')} title="Почта" errorMessage={errors?.email?.message} />
				<Input type="password" {...register('password')} title="Пароль" errorMessage={errors?.password?.message} />
				<Button type="submit">
					Зарегестрироваться
				</Button>
				<Button onClick={handleRedirect} type="button">
					Авторизоваться
				</Button>
			</Flex>
		</form>
	);
};
