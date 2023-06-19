import {BadResponse} from "@types/bad-response";
import {api} from "@shared/api";
import {SERVICE_RESULT_TYPE, ServiceResult} from "@shared/api/types";

import {ICategory} from "./types";

export const getCategories = async (): Promise<ServiceResult<ICategory[]>> => {
	try {
		const categoryResponse = await api.get(`/category`);

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: categoryResponse.data as unknown as ICategory[],
		};
	} catch (error: unknown) {
		const badResponse = error as BadResponse;

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: badResponse.message,
		}
	}
};

export const createCategory = async (name: string): Promise<ServiceResult<ICategory>> => {
	try {
		const categoryResponse = await api.post('/category', { name });

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: categoryResponse.data as unknown as ICategory,
		};
	} catch (error: unknown) {
		const badResponse = error as BadResponse;

		return  {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: badResponse.message,
		}
	}
};

export const deleteCategory = async (id: string): Promise<ServiceResult<any>> => {
	try {
		const category = await api.delete(`/category/${id}`);

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: category.data,
		}
	} catch (error: unknown) {
		const badResponse = error as BadResponse;

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: badResponse.message,
		}
	}
}

export const updateCategory = async (id: string, name): Promise<ServiceResult<any>> => {
	try {
		const category = await api.put(`/category/${id}`, { name });

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: category.data,
		}
	} catch (error: unknown) {
		const badResponse = error as BadResponse;

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: badResponse.message,
		}
	}
}

