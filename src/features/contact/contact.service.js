import { apiRoutes } from "../../shared/routes";

/**
 * @typedef {import("../../libs/fetchData").FetchDataType} FetchDataType
 * */

class ContactService {
	apiClient;
	constructor(
		/** @type {FetchDataType} */
		apiClient,
	) {
		this.apiClient = apiClient;
	}

	/**
	 *
	 * @param {{
	 *   name: string,
	 *   contact: string
	 *   message: string
	 * }} payload
	 */
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

/** @param {FetchDataType} apiClient */
export function createContactService(apiClient) {
	return new ContactService(apiClient);
}
