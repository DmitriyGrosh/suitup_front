import axios, { AxiosRequestConfig } from 'axios';
import { TOKEN } from '@enum/Token';
import { UserCredential } from "../../types";

export const BaseUrl = 'http://194.67.110.39/api';

export const api = axios.create({
  baseURL: 'http://194.67.110.39/api',
  // headers: {
  //   Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.ACCESS]}`,
  // },
});

api.interceptors.request.use(function (config) {
	if (config.headers) {
		config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.ACCESS]}`;

		return config;
	}
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

api.interceptors.response.use(
	(config) => config,
	// eslint-disable-next-line consistent-return
	async (error) => {
		try {
			const originalRequest = error.config;
			console.log('==========>error', error);
			if (error.response.status === 401) {
				console.log('==========>123', 123);
				const response = await axios.get<UserCredential>(`${BaseUrl}/auth/refresh`, {
					headers: {
						Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.REFRESH]}`
					}
				});

				if (response.status === 401) {
					window.location.href = '/';
				} else {
					const prevViewer = JSON.parse(localStorage.getItem(TOKEN.VIEWER));
					const newViewer = {
						...prevViewer,
						[TOKEN.REFRESH]: response.data.refreshToken,
						[TOKEN.ACCESS]: response.data.accessToken,
					};

					localStorage.setItem(TOKEN.VIEWER, JSON.stringify(newViewer));
				}

				return api.request(originalRequest);
			}
		} catch (e) {
			console.log('==========>e', e);
		}
	}
);
