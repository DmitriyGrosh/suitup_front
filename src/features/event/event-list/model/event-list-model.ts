import { makeAutoObservable, runInAction } from "mobx";
import { getEvents, IEvent } from "@shared/api/event";
import { SERVICE_RESULT_TYPE } from "@shared/api/types";

class EventListModel {
	eventList: IEvent[] = [];
	eventListLoading: boolean = false;
	eventListError: null | string = null;

	constructor() {
		makeAutoObservable(this);
	}

	public async getAll() {
		this.eventListLoading = true;

		const allEvents = await getEvents();

		if (allEvents.type === SERVICE_RESULT_TYPE.SUCCESS) {
			runInAction(() => {
				this.eventListLoading = false;
				this.eventList = allEvents.data;
				this.eventListError = null;
			})
		}

		if (allEvents.type === SERVICE_RESULT_TYPE.FAILURE) {
			runInAction(() => {
				this.eventListLoading = false;
				this.eventListError = allEvents.data;
			})
		}
	}
}

export const eventListModel = new EventListModel();
