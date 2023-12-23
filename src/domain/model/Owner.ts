import { randomUUID } from "crypto";

export interface IOwner {
	id?: string;
	fullName: string;
}

export class Owner {
	private id: string;
	private fullName: string;

	constructor(data: IOwner) {
		this.fullName = data.fullName;
		this.id = data.id ?? randomUUID();
	}

	getId() {
		return this.id;
	}

	getFullName() {
		return this.fullName;
	}
}
