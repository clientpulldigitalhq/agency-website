// @ts-check

import { useMemo } from "react";
import { createFetchDataClient } from "../libs/fetchData";

export function useApiClient() {
	return useMemo(
		() => ({
			fetchData: createFetchDataClient(),
		}),
		[],
	);
}
