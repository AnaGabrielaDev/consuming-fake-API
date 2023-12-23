import axios, { AxiosInstance } from "axios";

export class FakeApi {
	private instance: AxiosInstance;
	constructor() {
		this.instance = axios.create({
			baseURL: "https://fakerapi.it/api/v1",
		});
	}

	async getOwners(): Promise<any> {
		const getOwners = await this.instance.get("/persons?_quantity=1");
		return getOwners.data;
	}

	async getCompanies(): Promise<any> {
		const getCompanies = await this.instance.get("/companies?_quantity=20");

		return getCompanies.data;
	}
}
