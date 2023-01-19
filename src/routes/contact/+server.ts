import { json, type RequestHandler, error } from "@sveltejs/kit";
import { MailService, type MailDataRequired } from "@sendgrid/mail";
import type { EmailData } from "@sendgrid/helpers/classes/email-address";

const { SENDGRID_API_KEY, SENDGRID_SENDER, RECAPTCHA_SECRET_KEY } = process.env;

export const POST: RequestHandler = async ({ request }) => {
    try {
        const data = await request.json();
        const recaptchaVerify = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${data.token}`
        );
        const recaptchaRes = await recaptchaVerify.json();
        if (recaptchaRes.success) {
            const sgMail = new MailService();
            sgMail.setApiKey(SENDGRID_API_KEY as string);
            const msg: MailDataRequired = {
                to: 'yangrc.chen@gmail.com',
                from: SENDGRID_SENDER as EmailData,
                subject: `Contact Email From: ${data.name} - ${data.email}`,
                text: data.message as string,
                html: `<strong>${data.message}</strong>`
            }
            await sgMail.send(msg);
            return json({
                message: "Email sent successfully. Talk to you soon!"
            })
        } else {
            return error(500, "Recaptcha failed.");
        }
    } catch (err) {
        throw error(500, "An error has occurred during submission. Please try again later.")
    }
}