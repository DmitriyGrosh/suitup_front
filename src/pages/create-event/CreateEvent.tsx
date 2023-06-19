import {EventAdd} from "@features/event/event-add/ui";
import {Flex} from "@shared/ui/flex";

export const CreateEvent = () => {

	return (
		<Flex className="flex flex__column flex__gap-lg flex__center-center p-md">
			<h1>Создать событие</h1>
			<EventAdd />
		</Flex>
	);
};
