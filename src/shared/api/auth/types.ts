export type TSignInUser = {
  username: string;
  password: string;
};

export type TRegisterUser = {
	username: string;
	name: string;
	password: string;
	email: string;
	address: {
		city: string;
		street: string;
	}
}
