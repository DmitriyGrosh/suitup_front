import * as yup from "yup";

// {
// 	id: '2315315',
// 		parentId: '',
// 	status: 'ok',
// 	recurringStatus: 'ok',
// 	hits: '213',
// 	title: 'Старая Ладога: 1270 лет истории Отечества',
// 	isAdvertisement: false,
// 	isRepeated: false,
// 	GAID: null,
// 	startDate: '2023-05-06 07:45:00',
// 	endDate: '2023-05-06 19:30:00',
// 	minPrice: null,
// 	maxPrice: null,
// 	ordersNumber: 0,
// 	ticketsNumber: 0,
// 	repeatedData: {
// 	count: null,
// 		nearest: null,
// 		furthest: null,
// },
// 	ofertaLink: 'https://turekskurs.timepad.ru/event/oferta/2315315/',
// 		allowRegistration: false,
// 	categories: ['461'],
// 	address: {
// 	city: 'Санкт-Петербург',
// 		street: 'Пл. Ленина,6',
// 		text: 'Санкт-Петербург, Пл. Ленина,6',
// 		lat: '59.955737',
// 		lon: '30.356436',
// },
// 	contact_phone: '+79046397321',
// 		organization: {
// 	id: '57087',
// 		logo: 'https://ucare.timepad.ru/c6fb2ff8-883e-46cb-bca2-8c05b1ee49a2/-/preview/308x600/-/format/jpeg/',
// 		name: 'Автобусные экскурсии',
// 		description:
// 	'Авторские экскурсии выходного дня по Северо-Западу (исторические места, крепости, монастыри, туристические комплексы).\nУспешный опыт организации и проведения экскурсий более 20 лет.\n\n',
// 		pdAddress:
// 	'188661, Ленинградская область, Всеволожский район, п.Мурино, ул.Шоссе в Лаврики,д.59, корп.1, кв.658',
// 		pdEmail: 'travel.val@yandex.ru',
// 		inn: '471800508009',
// 		ogrn: null,
// 		workingTime: '10:00 - 18:00',
// 		shareLink: null,
// 		poster:
// 	'https://ucare.timepad.ru/41249879-fbef-4dd2-9c66-76d0a1375fb6/-/preview/308x600/-/format/jpeg/-/format/jpeg/poster_org_57087.jpg',
// 		socials: [
// 		{
// 			name: 'vk',
// 			url: '',
// 		},
// 		{
// 			name: 'facebook',
// 			url: '',
// 		},
// 		{
// 			name: 'twitter',
// 			url: '',
// 		},
// 		{
// 			name: 'telegram',
// 			url: '',
// 		},
// 		{
// 			name: 'instagram',
// 			url: '',
// 		},
// 		{
// 			name: 'web',
// 			url: '',
// 		},
// 	],
// 		subscribers: 2,
// 		eventCount: null,
// 		isFavorite: false,
// 		contact_phone: '+79046397321',
// },
// 	isFavorite: false,
// 		order_mail: null,
// 	rating: null,
// 	startDateUnknown: false,
// }

export const eventSchema = yup
	.object()
	.shape({
		title: yup.string().required(),
		description: yup.string().required(),
		logo: yup.mixed(),
		startDate: yup.date().required(),
		endDate: yup.date().required(),
		minPrice: yup.number(),
		maxPrice: yup.number(),
		ticketsNumber: yup.number(),
		categories: yup.array(),
		address: yup.object().shape({
			city: yup.string(),
			street: yup.string(),
		}),
		email: yup.string().required(),
		phone: yup.string().required(),
		socials: yup.array().of(yup.object().shape({
			name: yup.string(),
			url: yup.string(),
		}))
	})
	.required();


export type TEventAddSchema = yup.InferType<typeof eventSchema>;
