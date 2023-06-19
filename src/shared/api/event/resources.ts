import {SERVICE_RESULT_TYPE, ServiceResult} from "@shared/api/types";
import {api, BaseUrl} from "@shared/api";
import {CreateEventBody, IEvent} from "./types";
import {BadResponse} from "@types/bad-response";
import axios from "axios";

export const createEvent = async (body: CreateEventBody): Promise<ServiceResult<IEvent>> => {
	try {
		const eventResponse = await api.post('/post', { ...body });

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: eventResponse.data,
		}
	} catch (error: unknown) {
		const badResponse = error as BadResponse;

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: badResponse.response?.data?.message
		}
	}
}

export const getEventById = async (): Promise<ServiceResult<any>> => {
	try {

	} catch (error: unknown) {

	}
};

export const getEvents = async (): Promise<ServiceResult<IEvent[]>> => {
	try {
		const events = await axios.get(`${BaseUrl}/post`);

		return {
			type: SERVICE_RESULT_TYPE.SUCCESS,
			data: events.data,
		}
	} catch (error: unknown) {
		const badResponse = error as BadResponse;

		return {
			type: SERVICE_RESULT_TYPE.FAILURE,
			data: badResponse.message,
		}
	}
};
