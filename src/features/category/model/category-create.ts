import {makeAutoObservable, runInAction} from "mobx";

import {createCategory, deleteCategory, getCategories, ICategory} from "@shared/api/category";
import {SERVICE_RESULT_TYPE} from "@shared/api/types";
import {date} from "yup";

class CategoryCreate {
	category: null | ICategory = null;
	isLoading: boolean = false;
	error: null | string = null;
	categoryList: ICategory[] = [];
	categoryListLoading: boolean = false;
	categoryListError: null | string = null;


	constructor() {
		makeAutoObservable(this);
	}

	public async create(name: string) {
		this.isLoading = true;

		const categoryResponse = await createCategory(name);

		if (categoryResponse.type === SERVICE_RESULT_TYPE.SUCCESS) {
			runInAction(() => {
				this.isLoading = false;
				this.error = null;
				this.category = categoryResponse.data;
			});
		}

		if (categoryResponse.type === SERVICE_RESULT_TYPE.FAILURE) {
			runInAction(() => {
				this.isLoading = false;
				this.error = categoryResponse.data;
			});
		}
	}

	public async getAll() {
		this.categoryListLoading = true;

		const allCategories = await getCategories();

		if (allCategories.type === SERVICE_RESULT_TYPE.SUCCESS) {
			runInAction(() => {
				this.categoryListLoading = false;
				this.categoryListError = null;
				this.categoryList = allCategories.data;
			});
		}

		if (allCategories.type === SERVICE_RESULT_TYPE.FAILURE) {
			runInAction(() => {
				this.categoryListLoading = false;
				this.categoryListError = allCategories.data;
			})
		}
	}

	public async deleteCategory(id: string) {
		this.categoryListLoading = true;

		const deletedCategory = await deleteCategory(id);

		if (deletedCategory.type === SERVICE_RESULT_TYPE.SUCCESS) {
			runInAction(() => {
				this.categoryListLoading = false;
				this.categoryListError = null;
				this.categoryList = this.categoryList.filter((el) => el._id !== id);
			})
		}

		if (deletedCategory.type === SERVICE_RESULT_TYPE.FAILURE) {
			this.categoryListLoading = false;
			this.categoryListError = deletedCategory.data;
		}
	}

	public async updateCategory(id: string) {
		this.categoryListLoading = true;

		const deletedCategory = await deleteCategory(id);

		console.log('==========>deletedCategory.data', deletedCategory.data);

		if (deletedCategory.type === SERVICE_RESULT_TYPE.SUCCESS) {
			runInAction(() => {
				this.categoryListLoading = false;
				this.categoryListError = null;
				this.categoryList = this.categoryList.map((el) => ({
					...el,
					name: el._id === id ? 'new' : el.name,
				}));
			})
		}

		if (deletedCategory.type === SERVICE_RESULT_TYPE.FAILURE) {
			this.categoryListLoading = false;
			this.categoryListError = deletedCategory.data;
		}
	}
}

export const categoryCreateModel = new CategoryCreate();
