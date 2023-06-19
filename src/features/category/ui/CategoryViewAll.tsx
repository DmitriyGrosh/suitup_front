import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Flex } from "@shared/ui/flex";
import { Spinner } from "@shared/ui/spinner";

import { categoryCreateModel } from "../model/category-create";

import './CategoryCreate.scss';

export const CategoryViewAll = observer(() => {

	useEffect(() => {
		const initData = async () => {
			await categoryCreateModel.getAll();
		}

		initData();
	}, [categoryCreateModel.category]);

	if (categoryCreateModel.categoryListLoading) {
		return <Spinner spinnerSize="large" />
	}

	return (
		<Flex className="flex__gap-md">
			{categoryCreateModel.categoryList.map((category) => (
				<div className="category flex flex__gap-sm" key={category._id}>
					<p className="category__text">
						{category.name}
					</p>
					<img onClick={() => categoryCreateModel.deleteCategory(category._id)} src="https://api.iconify.design/mdi:close-circle-outline.svg" alt="close" />
				</div>
			))}
		</Flex>
	);
});
