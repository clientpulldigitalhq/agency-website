export function getEnv({ name, required, description = "", isStatic = true }) {
	let value = process.env[name.trim()];
	if (isStatic) value = import.meta.env[name.trim()];

	if (required !== false && !value)
		throw Error(
			`"${name} ${description}" : is a required environment variable but not defined!`,
		);

	return value;
}
