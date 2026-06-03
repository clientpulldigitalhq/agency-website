/**
 *
 * @param {object} errors
 * @param {import("zod").core.$ZodIssue['path']} path
 * @param {{ message: string }} value
 */

function set(errors, path, value) {
	let current = errors;

	for (let i = 0; i < path.length; i++) {
		const key = path[i];
		if (i !== path.length - 1) {
			current[key] ??= {};
			current = current[key];
			continue;
		}

		current[key] = value;
	}
}

/**
 *
 * @param {import("zod").core.$ZodIssue[]} issues
 */

export function formatZodIssuesToObject(issues) {
	const errors = {};

	for (const issue of issues) {
		set(errors, issue.path, {
			message: issue.message,
		});
	}

	return errors;
}
