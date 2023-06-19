import { CategoryCreate, CategoryViewAll } from "@features/category/ui";
import { Flex } from "@shared/ui/flex";

export const Category = () => {

	return (
		<Flex className="flex__column flex__gap-lg">
			<CategoryViewAll />
			<CategoryCreate />
		</Flex>
	);
};
