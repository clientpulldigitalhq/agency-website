/**
 * @overload
 * @param {{
 * 	name: string
 *	required?: true
 *	description?: string
 *	isStatic?: boolean
 * }} props
 * @returns {string}
 */

/**
 *@overload
 * @param {{
 *		name: string
 *		required: false
 *		description?: string
 *		isStatic?: boolean
 *	}} props
 * @returns {string | undefined}
 */

export function getEnv({ name, required, description = "", isStatic = true }) {
	let value;

	if (!isStatic) value = process.env[name.trim()];
	if (isStatic) value = import.meta.env[name.trim()];

	if (required !== false && !value)
		throw Error(
			`"${name} ${description}" : is a required environment variable but not defined!`,
		);

	return value;
}
