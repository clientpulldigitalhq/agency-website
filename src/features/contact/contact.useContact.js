import { useState } from "react";

const isPhone = (value) => /^\d+$/.test(value);
const isEmail = (value) => value.includes("@");

export function useContact() {
	const [formData, setFormData] = useState({
		name: "",
		emailOrPhone: "",
		message: "",
	});

	const [formError, setFormError] = useState({
		nameError: "",
		emailOrPhoneError: "",
		messageError: "",
	});

	const handleSubmit = (e) => {
		// prevent default behavior of the browser
		e.preventDefault();

		if (!formData.name.trim()) {
			setFormError((prevError) => ({
				...prevError,
				nameError: "Name is required!",
			}));

			return;
		}

		if (!formData.emailOrPhone.trim()) {
			setFormError((prevError) => ({
				...prevError,
				emailOrPhoneError: "Email Address or Phone Number is required!",
			}));

			return;
		}

		if (!isPhone(formData.emailOrPhone) && !isEmail(formData.emailOrPhone)) {
			setFormError((prevError) => ({
				...prevError,
				emailOrPhoneError: "It must be an Email Address or a Phone number",
			}));
			return;
		}

		if (!formData.message.trim()) {
			setFormError((prevError) => ({
				...prevError,
				messageError: "Message is required!",
			}));
			return;
		}

		console.log(formData.message.trim());
	};

	const onSubmit = (e) => {
		setFormError({ nameError: "", emailOrPhoneError: "", messageError: "" });
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	return {
		formData,
		formError,
		onSubmit,
		handleSubmit,
	};
}
