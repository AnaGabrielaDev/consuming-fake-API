export interface ListClientsRequest {
	name: string;
	email: string;
	phone: string;
}

export interface ListOwnerRequest {
	firstname: string;
	lastname: string;
}
export interface ListClientResponse {
	name: string;
	email: string;
	phone: string;
	person: {
		fullName: string;
	};
}
export interface ListClients {
	execute: (
		companies: ListClientsRequest[],
		owner: ListOwnerRequest,
	) => Promise<ListClientResponse[]>;
}
