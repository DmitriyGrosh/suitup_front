import { api } from '@shared/api';

export const loginResource = async (token: string) => {
  return await api.post('/auth/login', {
    token,
  });
};

export const logoutResource = async (id: string) => {
  return await api.post('/auth/logout', {
    id,
  });
};

export const testAuth = async () => {
  return await api.get('/auth');
};
