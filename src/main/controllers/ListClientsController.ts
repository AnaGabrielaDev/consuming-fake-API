import { Request, Response } from "express";
import { FakeApi } from "../../infra/api/FakeApi";
import { ListClientsService } from "../../app/services";

export default class ListClientsController {
	constructor(
		private readonly fakeApi: FakeApi,
		private readonly listClientService: ListClientsService,
	) {}

	async get(req: Request, res: Response): Promise<Response> {
		const owners = await this.fakeApi.getOwners();
		const companies = await this.fakeApi.getCompanies();
		const listClients = await this.listClientService.execute(
			companies.data,
			owners.data[0],
		);

		return res.json({
			total: companies.total,
			clients: listClients.map((client) => client),
		});
	}
}
