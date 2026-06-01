import { fe } from "../../shared/utils/fe";
import { responseUtil } from "../../shared/utils/response";
import { axiosInstance } from "./axios";

/**
 * @typedef {"idle" | "loading" | "error" | "success"} FetchingStatus
 * @typedef {{
 *   uri: string,
 *   method?: "post" | "put" | "delete" | "patch" | "get",
 *   payload?: Record<string, any>
 * }} FetchDataProps
 * @typedef {500 | 400 | 403 | 404} ErrorCode
 * @typedef {200 | 201} SuccessCode
 * @typedef {{ success: boolean, error: boolean, message: string }} FetchStatus
 */

/**
 */
/**
 * @template T
 * @typedef {import("../../shared/utils/response").FormattedResponse<T>} FetchDataWithStatus
 * @typedef {(props: FetchDataProps) => {
 * 	fetch: () => Promise<void>,
 * 	isError: () => boolean,
 * 	isSuccess: () => boolean,
 * 	message: string,
 *  error: string,
 *  data: T,
 *  dataWithStatus: FetchDataWithStatus<T>,
 * 	fetchStatus: FetchStatus
 * 	status: FetchingStatus
 * }} FetchDataType
 */

/**
 * @template T
 * @returns {() => FetchDataType<T>}
 */

function fetchData() {
	return (payload) => {
		const localPayload = payload;

		/** @type {FetchingStatus} */
		let status = "idle";

		/** @type {T | null} */

		let data = null;
		/** @type {string | null} */

		/** @type {string | null} */
		let error = null;

		/** @type {string | null} */
		let message = null;

		/** @type {ErrorCode | SuccessCode} */
		let statusCode = 400;

		/** @type {() => Promise<void>} */
		async function fetch() {
			if (status !== "idle") return;

			const { uri, method = "post", payload } = localPayload;
			status = "loading";

			const axios = axiosInstance();

			let promise;

			switch (method) {
				case "delete":
				case "get": {
					promise = axios[method](uri);
					break;
				}
				default:
					promise = axios[method](uri, payload);
			}

			const result = await tryCatch(promise);

			status = "error";
			statusCode = 400;

			if (!result.success) {
				error = fe(result.error);
				return;
			}

			if (![200, 201].includes(result.data.data.status)) {
				error = fe(result.data.data.message);
				return;
			}

			const { message: resMessage, status: _s, ...rest } = result.data.data;

			statusCode = result.data.data.status;
			status = "success";
			message = resMessage;

			data = rest;
		}

		return {
			fetch,
			isError() {
				return status === "error";
			},
			isSuccess() {
				return status === "success";
			},
			get message() {
				if (!message) throw Error("No success message exists");

				return message;
			},
			get error() {
				if (!error) throw Error("No error exists");
				return error;
			},
			get data() {
				if (!data) throw Error(error ?? "Data not available, call fetch first");

				return data;
			},
			/**
			 * @type {FetchDataWithStatus<T>}
			 */
			get dataWithStatus() {
				if (data) return responseUtil(message, "success", data);

				return responseUtil(error, "error");
			},
			get fetchStatus() {
				if (status === "success") return responseUtil(message, "success");

				return responseUtil(error, "error");
			},
			statusCode,
		};
	};
}

/**
 * @template T
 * @returns {FetchDataType<T>()}
 */
export function createFetchDataClient() {
	return fetchData();
}
