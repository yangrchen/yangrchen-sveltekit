import { json, type RequestHandler } from '@sveltejs/kit';
import { MailService, type MailDataRequired } from '@sendgrid/mail';
import {
	SECRET_RECAPTCHA_KEY,
	SECRET_SENDGRID_SENDER,
	SECRET_SENDGRID_API_KEY
} from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		const recaptchaVerify = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_RECAPTCHA_KEY}&response=${data.token}`
		);
		const recaptchaRes = await recaptchaVerify.json();
		if (recaptchaRes.success) {
			const sgMail = new MailService();
			sgMail.setApiKey(SECRET_SENDGRID_API_KEY as string);
			const msg: MailDataRequired = {
				to: 'yangrc.chen@gmail.com',
				from: SECRET_SENDGRID_SENDER,
				subject: `Contact Email From: ${data.name} - ${data.email}`,
				text: data.message as string,
				html: `<strong>${data.message}</strong>`
			};
			await sgMail.send(msg);
			return json({ message: 'Email sent successfully. Talk to you soon!' });
		} else {
			return new Response(JSON.stringify({ recaptcha: 'Recaptcha failed.' }), { status: 500 });
		}
	} catch (err) {
		return new Response(
			JSON.stringify({
				submission: 'An error has occurred during submission. Please try again later.'
			}),
			{ status: 500 }
		);
	}
};
