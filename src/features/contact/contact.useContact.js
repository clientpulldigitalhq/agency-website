import { useCallback, useState } from "react";

const isPhone = (value) => /^\d+$/.test(value);
const isEmail = (value) => value.includes("@");

export function useContact() {
	const [formData, setFormData] = useState({
		name: "",
		emailOrPhone: "",
		message: "",
	});

	const [formError, setFormError] = useState({
		name: "",
		emailOrPhone: "",
		message: "",
	});

	const onSubmit = (e) => {
		// prevent default behavior of the browser
		e.preventDefault();

		if (!formData.name.trim()) {
			setFormError((errors) => ({
				...errors,
				nameError: "Name is required!",
			}));

			return;
		}

		if (!formData.emailOrPhone.trim()) {
			setFormError((errors) => ({
				...errors,
				emailOrPhone: "Email Address or Phone Number is required!",
			}));

			return;
		}

		if (!isPhone(formData.emailOrPhone) && !isEmail(formData.emailOrPhone)) {
			setFormError((errors) => ({
				...errors,
				emailOrPhone: "It must be an Email Address or a Phone number",
			}));
			return;
		}

		if (!formData.message.trim()) {
			setFormError((errors) => ({
				...errors,
				message: "Message is required!",
			}));
			return;
		}

		console.log(formData.message.trim());
	};

	const register = useCallback(
		(name) => {
			return {
				value: formData[name],
				onChange: (e) => {
					setFormError((errors) => ({ ...errors, [name]: "" }));
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
