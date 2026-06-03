import { useMemo } from "react";
import { useApiClient } from "../../hooks/useApiClient";
import { createContactService } from "./contact.service";

export function useContactService() {
	const { fetchData } = useApiClient();

	return useMemo(() => createContactService(fetchData), [fetchData]);
}
