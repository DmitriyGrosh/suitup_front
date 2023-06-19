import { makeAutoObservable, runInAction } from "mobx";

import { SERVICE_RESULT_TYPE } from "@shared/api/types";
import { signUpResource, TRegisterUser } from "@shared/api/auth";
import { UserCredential } from "@types/user-credentional";

import { TRegisterSchema} from "../lib/register.schema";

class RegisterModel {
	public isLoading = false;
	public error: null | string = null;
	public data: null | UserCredential = null;

	constructor() {
		makeAutoObservable(this)
	}

	public async register(data: TRegisterSchema) {
		this.isLoading = true;

		const signUpData: TRegisterUser = {
			username: data.username,
			name: `${data.firstName} ${data.lastName}`,
			email: data.email,
			address: {
				street: data.street,
				city: data.city,
			},
			password: data.password,
		};

		const registerResponse = await signUpResource(signUpData);

		if (registerResponse.type === SERVICE_RESULT_TYPE.SUCCESS) {
			runInAction(() => {
				this.isLoading = false;
				this.data = registerResponse.data;
				this.error = null;
			})
		}

		if (registerResponse.type === SERVICE_RESULT_TYPE.FAILURE) {
			runInAction(() => {
				this.isLoading  = false;
				this.error = registerResponse.data;
			})
		}

	}
}

export const registerModel = new RegisterModel();
