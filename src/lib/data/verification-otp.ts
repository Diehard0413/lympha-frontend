import { sendEmail } from "../mail";
import prisma from "../prisma";
import {
  generateEmailVerificationOtpCode,
  generatePasswordResetRequestVerificationOtpCode,
} from "../tokens";

export const getEmailVerificationOtpCodeByEmail = async ({
  email,
  otpCode,
}: {
  email: string;
  otpCode: string;
}) => {
  try {
    const verificationOtpCode =
      await prisma.emailVerificationOtpCode.findUnique({
        where: {
          email,
          otpCode,
        },
      });

    return verificationOtpCode;
  } catch {
    return null;
  }
};

export const getPasswordResetRequestOtpCode = async ({
  email,
  otpCode,
}: {
  email: string;
  otpCode: string;
}) => {
  try {
    const verificationOtpCode =
      await prisma.passwordResetRequestVerificationOtpCode.findUnique({
        where: {
          email,
          otpCode,
        },
      });

    return verificationOtpCode;
  } catch {
    return null;
  }
};

export const sendVerificationEmail = async (email: string) => {
  try {
    const generateOTP = await generateEmailVerificationOtpCode(email);

    await sendEmail({
      to: email,
      subject: "Email Verification",
      // generate html with beautiful email template, and include the otp code
      html: `
      <div style="">
        <h1>Verify your email</h1>
        <div
          style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;">
          <p> Please use the following code to verify your email. </p>
          <div style="font-size: 1.2rem; color: #333; margin-bottom: 1rem; margin-top: 1rem; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; background-color: #f8f9fa; border: 1px solid #f1f1f1; border-radius: 5px; padding: 1rem;">
            ${generateOTP.otpCode}
          </div>
        </div>

        <p>Enter this code in the app to verify your email.</p>

        <p>Thanks!</p>

        <p>Team</p>
      </div>
      `,
    });
  } catch (e: any) {
    return null;
  }
};

export const sendPasswordResetRequestEmail = async (email: string) => {
  try {
    const generateOTP =
      await generatePasswordResetRequestVerificationOtpCode(email);

    await sendEmail({
      to: email,
      subject: "Reset password",
      html: `
      <div>
        <h1>Reset your password</h1>
        <div
          style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;">
          <p> Please use the following code to reset your password. </p>
          <div style="font-size: 1.2rem; color: #333; margin-bottom: 1rem; margin-top: 1rem; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; background-color: #f8f9fa; border: 1px solid #f1f1f1; border-radius: 5px; padding: 1rem;">
            ${generateOTP.otpCode}
          </div>
        </div>

        <p>Enter this code in the app to reset your password.</p> 

        <p>Thanks!</p>

        <p>Team</p>
      </div>
      `,
    });
  } catch {
    return null;
  }
};
