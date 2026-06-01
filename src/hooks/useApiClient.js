// @ts-check

import { useMemo } from "react";
import { createFetchDataClient } from "../libs/fetchData";

/**
 * @template T
 * @typedef {import("../libs/fetchData").FetchDataType<T>} FetchDataType
 */

export function useApiClient() {
	return useMemo(() => {
		/**
		 * @template T
		 * @type {FetchDataType<T>}
		 */
		const fetchData = createFetchDataClient();

		return { fetchData };
	}, []);
}
