import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";

import { TSignInUser } from '@shared/api/auth';
import { viewerModel } from '@entities/viewer/model';
import { Input } from '@shared/ui/input';
import { Button } from '@shared/ui/button';
import { Flex } from '@shared/ui/flex';

import { loginSchema, TLoginSchema } from '../../lib/login.schema';
import { loginModel } from '../../model/login-model';

import './Login.scss';

export const Login = observer(() => {
	const history = useNavigate();
  const { login } = viewerModel.useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleLogin = async (data: TLoginSchema) => {
    const prepareSignInData: TSignInUser = {
      username: data.username,
      password: data.password,
    };

    await loginModel.login(prepareSignInData);
  };

	const handleRedirect = () => {
		history('/register');
	};

  useEffect(() => {
    if (loginModel.data !== null) {
      login(loginModel.data);
    }
  }, [loginModel.data]);

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Flex className="flex__column flex__gap-md">
        <Input {...register('username')} title="Имя" type="text" errorMessage={errors?.username?.message} />
        <Input {...register('password')} title="Пароль" type="password" errorMessage={errors?.password?.message} />
        <Button type="submit">
	        Войти
        </Button>
	      <Button type="button" onClick={handleRedirect}>
		      Зарегестрироваться
	      </Button>
	      {loginModel.error && <span className="error">{loginModel.error}</span>}
      </Flex>
    </form>
  );
});
