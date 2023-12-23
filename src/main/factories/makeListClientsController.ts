import { ListClientsService } from "../../app/services";
import { FakeApi } from "../../infra/api/FakeApi";
import ListClientsController from "../controllers/ListClientsController";

export function makeListClientController() {
	const listClientService = new ListClientsService();
	const fakeApi = new FakeApi();
	return new ListClientsController(fakeApi, listClientService);
}
