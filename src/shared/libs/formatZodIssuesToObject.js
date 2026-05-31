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

export function formatZodIssuesToObject(issues) {
	const errors = {};

	for (const issue of issues) {
		set(errors, issue.path, {
			message: issue.message,
		});
	}

	return errors;
}
