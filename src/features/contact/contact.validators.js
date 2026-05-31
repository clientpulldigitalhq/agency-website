import z from "zod";

export const contactValidator = z.object({
	name: z.string("Invalid name format").trim().nonempty("Name is required!"),
	emailOrPhone: z
		.union(
			[
				z.coerce.number("Invalid phone format!").gt(0),
				z.email("Invalid email format!").trim(),
			],
			"Email / Phone number is required!",
		)
		.transform((contact) => contact?.toString()),
	message: z
		.string("Message format is invalid!")
		.trim()
		.nonempty("Message is required!"),
});
