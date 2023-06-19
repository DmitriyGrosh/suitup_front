export interface CreateEventBody {
	title: string;
	description: string;
	email: string;
	phone: string;
	startDate: Date;
	endDate: Date;
	content: string;
	minPrice: number;
	maxPrice: number;
	ticketsNumber: number;
	categories: string[];
}

export interface IAuthor {
	name: string;
	username: string;
	email: string;
	_id: string;
	address: {
		city: string;
		street: string;
	}
}

export interface IEvent {
	_id: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	minPrice: number;
	maxPrice: number;
	ticketsNumber: number;
	email: string;
	phone: string;
	content: string;

	author: IAuthor
	categories: string[];
}
