export interface IClient {
	name: string;
	email: string;
	phone: string;
	personId: string;
}
export class Client {
	private name: string;
	private email: string;
	private phone: string;
	private personId: string;

	constructor(data: IClient) {
		this.name = data.name;
		this.email = data.email;
		this.phone = data.phone;
		this.personId = data.personId;
	}

	getName() {
		return this.name;
	}

	getEmail() {
		return this.email;
	}

	getPhone() {
		return this.phone;
	}

	getPersonId() {
		return this.personId;
	}
}
