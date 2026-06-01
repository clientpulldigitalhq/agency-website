// @ts-check

import { useCallback, useState } from "react";
import { formatZodIssuesToObject } from "../../shared/libs/formatZodIssuesToObject";
import { DEFAULT_CONTACT_ERRORS, DEFAULT_CONTACT_PAYLOAD } from "./constants";
import { useContactService } from "./contact.useContactService";
import { contactValidator } from "./contact.validators";

/**
 * @typedef {{
 * 	name: string,
 * 	emailOrPhone: string,
 * 	message: string
 * }} ContactType
 */

/**
 * @typedef {{
 * 	root: {  message: string },
 * 	name: { message: string },
 * 	emailOrPhone: { message: string },
 * 	message: { message: string },
 * }} ContactErrors
 */

export function useContact() {
	const [formData, setFormData] = useState({ ...DEFAULT_CONTACT_PAYLOAD });
	const [formError, setFormError] = useState({ ...DEFAULT_CONTACT_ERRORS });
	const contactService = useContactService();

	const onSubmit = useCallback(
		/** @param {React.FormEvent<HTMLFormElement>} e */
		async function sendMessage(e) {
			// prevent default behavior of the browser
			e.preventDefault();

			setFormError({ ...DEFAULT_CONTACT_ERRORS });

			const parsed = contactValidator.safeParse(formData);
			if (!parsed.success)
				return setFormError(
					/** @type {ContactErrors} */ (
						formatZodIssuesToObject(parsed.error.issues)
					),
				);

			const res = await contactService.sendMessage(parsed.data);
			if (res.error)
				return setFormError((errors) => ({
					...errors,
					root: { message: res.message },
				}));
		},
		[formData, contactService],
	);

	const register = useCallback(
		/** @param {keyof ContactType} name */
		(name) => {
			return {
				value: formData[name],
				/** @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e */
				onChange: (e) => {
					setFormError((errors) => ({ ...errors, [name]: { message: "" } }));
					setFormData((formData) => ({ ...formData, [name]: e.target.value }));
				},
			};
		},
		[formData],
	);

	return {
		formData,
		formError,
		onSubmit,
		register,
	};
}
