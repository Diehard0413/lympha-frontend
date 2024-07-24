import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async ({
//   to,
//   html,
//   subject = "Email Verification",
//   from = "Acme <onboarding@resend.dev>",
// }: {
//   to: string;
//   html: any;
//   subject: string;
//   from?: string;
// }) => {
//   try {
//     await resend.emails.send({
//       from,
//       to,
//       subject,
//       html,
//     });
//     return { success: "Email sent successfully!" };
//   } catch (e: any) {
//     console.log(e);
//     return { error: "Email not sent!" };
//   }
// };

import Mailgun from "mailgun.js";
import FormData from "form-data";
import configs from "./configs";

const mailgun = new Mailgun(FormData);

const mailgunClient = mailgun.client({
  username: "api",
  key: configs.MAILGUN_API_KEY,
});

export const sendEmail = async ({
  to,
  html,
  subject = "Email Verification",
  from = "verify@sandbox24c8f53fe38b4e798ff90018525963a4.mailgun.org",
}: {
  to: string;
  html: any;
  subject: string;
  from?: string;
}) => {
  try {
    console.log(
      "configs.MAILGUN_DOMAIN",
      configs.MAILGUN_DOMAIN,
      configs.MAILGUN_API_KEY,
    );
    await mailgunClient.messages.create(
      configs.MAILGUN_DOMAIN ?? "sandbox.mailgun.org",
      {
        from,
        to,
        subject,
        html,
      },
    );
    return { success: "Email sent successfully!" };
  } catch (e: any) {
    console.log(e);
    return { error: "Email not sent!" };
  }
};
