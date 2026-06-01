// @ts-check

/**
 * @template T
 * @typedef {{
 *   message: string,
 *   success: true,
 *   error: false
 *   data?: T
 *   } | {
 *   message: string,
 *   success: false,
 *   error: true
 * }} FormattedResponse
 */

/**
 * @template T
 * @param {string} message
 * @param {"success" | "error"} success
 * @param {T} [data]
 * @returns {FormattedResponse<T>}
 */

export function responseUtil(message, success, data) {
	if (success === "success")
		return {
			message,
			success: true,
			error: false,
			...(data ? { data } : {}),
		};

	return { message, success: false, error: true };
}
