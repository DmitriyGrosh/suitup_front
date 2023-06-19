import { makeAutoObservable, runInAction } from 'mobx';
import { signInResource, TSignInUser } from '@shared/api/auth';
import { UserCredential } from '@types/user-credentional';
import { SERVICE_RESULT_TYPE } from '@shared/api/types';

class LoginModel {
  public isLoading = false;
  public error: null | string = null;
  public data: null | UserCredential = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async login(data: TSignInUser) {
    this.isLoading = true;
    const loginResponse = await signInResource(data);
		console.log('==========>loginResponse', loginResponse);

    if (loginResponse.type === SERVICE_RESULT_TYPE.SUCCESS) {
      runInAction(() => {
        this.isLoading = false;
        this.data = loginResponse.data;
        this.error = null;
      });
    }

    if (loginResponse.type === SERVICE_RESULT_TYPE.FAILURE) {
      runInAction(() => {
        this.isLoading = false;
        this.error = loginResponse.data;
      });
    }
  }
}

export const loginModel = new LoginModel();
