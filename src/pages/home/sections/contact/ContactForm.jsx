import { useContact } from "../../../../features/contact/contact.useContact";

export function ContactForm() {
	const { formError, onSubmit, register } = useContact();

	return (
		<form className="mx-auto w-full *:mb-6 sm:max-w-120" onSubmit={onSubmit}>
			<div className="input-container">
				<label htmlFor="name" className="label">
					NAME
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="rounded-lg border border-white bg-transparent p-4 focus:outline-0"
					{...register("name")}
				/>

				{formError?.name?.message && (
					<p className="errorElement">{formError.name.message}</p>
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
					{...register("emailOrPhone")}
				/>
				{formError?.emailOrPhone?.message && (
					<p className="errorElement">{formError.emailOrPhone.message} </p>
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
					className="text-brand-primary rounded-lg border border-yellow-400 bg-white p-4 focus:outline-0"
					{...register("message")}
				/>

				{formError?.message?.message && (
					<p className="errorElement">{formError.message.message}</p>
				)}
			</div>

			<button
				type="submit"
				className="bg-brand-accent hover:bg-brand-accent-hover w-full cursor-pointer rounded-md p-2 font-medium transition-colors duration-300 sm:max-w-50"
			>
				SEND MESSAGE
			</button>
		</form>
	);
}
