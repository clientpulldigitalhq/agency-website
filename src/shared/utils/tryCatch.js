// @ts-check

/**
 * @template T
 * @template Error
 * @param {Promise<T>} promise
 * @returns {Promise<{ success: true, data: T } | { success: false, error: Error }>}
 */

export async function tryCatch(promise) {
	try {
		return { success: true, data: await promise };
	} catch (error) {
		return { success: false, error: /** @type {Error} */ (error) };
	}
}

/**
 * @template T
 * @template Error
 * @param {() => T} callback
 * @returns {{ success: true, data: T } | { success: false, error: Error }}
 */
export function syncTryCatch(callback) {
	try {
		return { success: true, data: callback() };
	} catch (error) {
		return { success: false, error: /** @type {Error} */ (error) };
	}
}
