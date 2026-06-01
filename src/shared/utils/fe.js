// @ts-check

import { AxiosError } from "axios";
import { ZodError } from "zod";

/**
 *
 * @param {unknown} error
 * @returns {string}
 */

export const fe = (error) => {
	if (typeof error === "string") return error;

	if (error instanceof ZodError) return error.issues[0].message;

	if (error instanceof AxiosError)
		return error.response?.data?.message || error?.message;

	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;

	return "Something went wrong";
};
