import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
	text: z
		.string()
		.trim()
		.min(3, { message: 'I need at least 3 characters!' })
		.default("I'm a text!"),
	textarea: z.string().default("I'm a textarea!"),
	number: z.number().gt(0).default(-1),
	checkbox: z.boolean().default(false),
	button: z.string().default("I'm a button!"),
	reset: z.string().default("I'm a reset!"),
	submit: z.string().default("I'm a submit!")
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log(form);
		return message(form, 'Form posted successfully!');
	}
};
