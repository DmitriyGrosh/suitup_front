import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

import { viewerModel } from '@entities/viewer/model';

import { loginResource } from '@shared/api/auth/resources';

import './Login.scss';

export const Login = () => {
  const { login, logout } = viewerModel.useAuth();

  const onSuccess = async (credentialResponse) => {
    const { data } = await loginResource(credentialResponse.credential);

    const credential = {
      accessToken: '',
      refreshToken: data.currentHashedRefreshToken,
      username: data.name,
      id: data._id,
    };

    console.log('==========>document.cookie', document.cookie);

    login(credential);
  };

  const onError = () => {
    console.log('==========>error');
    logout();
  };

  return <GoogleLogin useOneTap onSuccess={onSuccess} onError={onError} />;
};
