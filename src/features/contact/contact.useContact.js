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

export function useContact() {
	const [formData, setFormData] = useState({ ...DEFAULT_CONTACT_PAYLOAD });
	const [formError, setFormError] = useState({ ...DEFAULT_CONTACT_ERRORS });
	const contactService = useContactService();

	const onSubmit = useCallback(
		async function sendMessage(e) {
			// prevent default behavior of the browser
			e.preventDefault();

			setFormError({ ...DEFAULT_CONTACT_ERRORS });

			const parsed = contactValidator.safeParse(formData);
			if (!parsed.success)
				return setFormError(formatZodIssuesToObject(parsed.error.issues));

			const res = await contactService.sendMessage(parsed.data);
			if (res.error)
				return setFormError((errors) => ({ ...errors, root: res.message }));
		},
		[formData, contactService],
	);

	const register = useCallback(
		/** @param {keyof ContactType} name */
		(name) => {
			return {
				value: formData[name],
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
