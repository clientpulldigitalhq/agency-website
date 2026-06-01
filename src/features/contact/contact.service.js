import { apiRoutes } from "../../shared/routes";

/**
 * @template T
 * @typedef {import("../../libs/fetchData").FetchDataType<T>} FetchDataType
 * */

class ContactService {
	apiClient;
	constructor(
		/** @type {FetchDataType<T>} */
		apiClient,
	) {
		this.apiClient = apiClient;
	}

	async sendMessage(payload) {
		const client = this.apiClient({
			uri: apiRoutes.contact.send.uri,
			method: apiRoutes.contact.send.method,
			payload,
		});

		await client.fetch();
		return client.fetchStatus;
	}
}

export function createContactService() {
	return new ContactService(apiClient);
}
