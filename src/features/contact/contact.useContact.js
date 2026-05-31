import { useCallback, useState } from "react";
import { formatZodIssuesToObject } from "../../shared/libs/formatZodIssuesToObject";
import { DEFAULT_CONTACT_ERRORS, DEFAULT_CONTACT_PAYLOAD } from "./constants";
import { contactValidator } from "./contact.validators";

export function useContact() {
	const [formData, setFormData] = useState({ ...DEFAULT_CONTACT_PAYLOAD });
	const [formError, setFormError] = useState({ ...DEFAULT_CONTACT_ERRORS });

	const onSubmit = useCallback(
		(e) => {
			// prevent default behavior of the browser
			e.preventDefault();
			setFormError({ ...DEFAULT_CONTACT_ERRORS });

			const parsed = contactValidator.safeParse(formData);
			if (!parsed.success)
				return setFormError(formatZodIssuesToObject(parsed.error.issues));
			const { data } = parsed;
			console.log(data);
		},
		[formData],
	);

	const register = useCallback(
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
