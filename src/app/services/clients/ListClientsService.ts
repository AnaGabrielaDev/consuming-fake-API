import {
	ListClientResponse,
	ListClients,
	ListClientsRequest,
	ListOwnerRequest,
} from "../../../domain/features";
import { Client } from "../../../domain/model";
import { Owner } from "../../../domain/model/Owner";

export class ListClientsService implements ListClients {
	async execute(
		companies: ListClientsRequest[],
		owner: ListOwnerRequest,
	): Promise<ListClientResponse[]> {
		const response = companies.map((company) => {
			const person = new Owner({
				fullName: `${owner.firstname} ${owner.lastname}`,
			});
			const client = new Client({
				name: company.name,
				email: company.email,
				phone: company.phone,
				personId: person.getId(),
			});

			return {
				name: client.getName(),
				email: client.getEmail(),
				phone: client.getPhone(),
				person: {
					fullName: person.getFullName(),
				},
			};
		});

		return response;
	}
}
