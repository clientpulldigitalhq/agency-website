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
	const [successMessage, setSuccessMessage] = useState("");
	const contactService = useContactService();

	const onSubmit = useCallback(
		/** @param {import("react").FormEvent<HTMLFormElement>} e */
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

			const { emailOrPhone: contact, name, message } = parsed.data;

			const res = await contactService.sendMessage({ contact, name, message });

			if (res.error)
				return setFormError((errors) => ({
					...errors,
					root: { message: res.message },
				}));

			setSuccessMessage(res.message);
			setFormData({ ...DEFAULT_CONTACT_PAYLOAD });
		},
		[formData, contactService],
	);

	const register = useCallback(
		/** @param {keyof ContactType} name */
		(name) => {
			return {
				value: formData[name],
				name,
				autoComplete: "on",
				/** @param {import("react").ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e */
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
		successMessage,
	};
}
