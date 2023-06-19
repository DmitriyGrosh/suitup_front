import axios, { AxiosResponse } from 'axios';
import { BaseUrl } from '@shared/api';
import { TRegisterUser, TSignInUser } from './types';
import { TOKEN } from '@enum/Token';
import { SERVICE_RESULT_TYPE, ServiceResult } from '@shared/api/types';
import {BadResponse, UserCredential} from "../../../types";


export const signInResource = async (
  user: TSignInUser,
): Promise<ServiceResult<UserCredential>> => {
  try {
    const { data } = await axios.post<AxiosResponse<UserCredential>>(
      `${BaseUrl}/auth/signin`,
      {
        ...user,
      },
    );

    return {
      type: SERVICE_RESULT_TYPE.SUCCESS,
      data: data as unknown as UserCredential,
    };
  } catch (error: unknown) {
    const badResponse = error as BadResponse;
		console.log('==========>error', error);

    return {
      type: SERVICE_RESULT_TYPE.FAILURE,
      data: badResponse.response?.data?.message,
    };
  }
};

export const signUpResource = async (createUserData: TRegisterUser): Promise<ServiceResult<UserCredential>> => {
	try {
		const { data } = await axios.post<AxiosResponse<UserCredential>>(`${BaseUrl}/auth/signup`, {
			...createUserData,
		});

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: data as unknown as UserCredential,
		}
	} catch (error: unknown) {
		const badResponse = error as BadResponse;

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: badResponse.response.data.message,
		};
	}
};

export const logoutResource = async () => {
	console.log('==========>JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.REFRESH]', JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.ACCESS]);
  return await axios.get('http://localhost:3001/auth/logout', {
		headers: {
			Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.ACCESS]}`
		}
  });
};

export const refreshResource = async () => {
  return await axios.get(`${BaseUrl}/auth/refresh`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.REFRESH]}`,
    },
  });
};
