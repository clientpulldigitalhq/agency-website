// @ts-check

import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useContact } from "../../../../features/contact/contact.useContact";
import { ErrorCard } from "../../../../shared/ui/primitive/ErrorCard";

export function ContactForm() {
	const { formError, onSubmit, register, successMessage } = useContact();

	return (
		<form className="mx-auto w-full *:mb-4 sm:max-w-120" onSubmit={onSubmit}>
			<div className="input-container">
				<label htmlFor="name" className="label text-neutral">
					NAME
				</label>
				<input
					type="text"
					id="name"
					placeholder="Enter your name. e.g. John Doe"
					className="rounded-lg outline tracking-tight text-neutral-secondary outline-neutral/70 focus:outline-2 focus:outline-brand-accent-secondary/60 px-4 py-2"
					{...register("name")}
				/>

				{formError?.name?.message && (
					<ErrorCard>{formError.name.message}</ErrorCard>
				)}
			</div>
			<div className="input-container">
				<label htmlFor="email" className="label text-neutral">
					EMAIL OR PHONE NUMBER
				</label>
				<input
					type="type"
					id="email"
					placeholder="0200000000 / example@me.com"
					className="rounded-lg outline tracking-tight text-neutral-secondary outline-neutral/70 focus:outline-2 focus:outline-brand-accent-secondary/60 px-4 py-2"
					{...register("emailOrPhone")}
				/>
				{formError?.emailOrPhone?.message && (
					<ErrorCard>{formError.emailOrPhone.message}</ErrorCard>
				)}
			</div>
			<div className="input-container">
				<label htmlFor="message" className="label text-neutral">
					MESSAGE
				</label>
				<textarea
					id="message"
					rows={5}
					placeholder="Briefly describe your enquiry or service"
					className="text-brand-primary rounded-lg border border-yellow-400 bg-white px-4 py-2 resize-none h-30 focus:outline-0"
					{...register("message")}
				/>

				{formError?.message?.message && (
					<ErrorCard>{formError.message.message}</ErrorCard>
				)}
			</div>

			<div role="alert" aria-live="polite">
				{successMessage && <p className="text-success">{successMessage}</p>}

				{formError?.root?.message && (
					<ErrorCard>{formError.root.message}</ErrorCard>
				)}
			</div>

			<button
				type="submit"
				className="bg-brand-accent hover:bg-brand-accent-hover w-full cursor-pointer rounded-md px-8 py-4 font-bold transition-colors duration-300 mt-6 justify-center flex items-center gap-x-2"
			>
				Send Message <PiPaperPlaneRightFill className="size-5" />
			</button>
		</form>
	);
}
