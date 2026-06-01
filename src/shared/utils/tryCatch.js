export async function tryCatch(promise) {
	try {
		return { success: true, data: await promise };
	} catch (error) {
		return { success: false, error: error };
	}
}

export function syncTryCatch(callback) {
	try {
		return { success: true, data: callback() };
	} catch (error) {
		return { success: false, error: error };
	}
}
