import { useState } from "react";

function ContactForm() {
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

  const isPhone = (value) => /^\d+$/.test(value);

  const isEmail = (value) => value.includes("@");

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

  const handleChange = (e) => {
    setFormError({ nameError: "", emailOrPhoneError: "", messageError: "" });

    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form
      className="mx-auto w-full *:mb-6 sm:max-w-120"
      onSubmit={handleSubmit}
    >
      <div className="input-container">
        <label htmlFor="name" className="label">
          NAME
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="rounded-lg border border-white bg-transparent p-4 focus:outline-0"
          onChange={handleChange}
          value={formData.name}
        />

        {formError.nameError && (
          <p className="errorElement">{formError.nameError}</p>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="name" className="label">
          EMAIL OR PHONE NUMBER
        </label>
        <input
          type="type"
          name="emailOrPhone"
          id="email"
          className="rounded-lg border border-white bg-transparent p-4 focus:outline-0"
          onChange={handleChange}
          value={formData.emailOrPhone}
        />
        {formError.emailOrPhoneError && (
          <p className="errorElement">{formError.emailOrPhoneError} </p>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="message" className="label">
          MESSAGE
        </label>
        <textarea
          id="message"
          rows={5}
          name="message"
          placeholder="Briefly describe your enquiry or service"
          className="rounded-lg border border-yellow-400 bg-white p-4 text-[#134e4a] focus:outline-0"
          onChange={handleChange}
          value={formData.message}
        />

        {formError.messageError && (
          <p className="errorElement">{formError.messageError}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-md bg-[#f97316] p-2 font-medium transition-colors duration-300 hover:bg-[#e16e1c] sm:max-w-50"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
