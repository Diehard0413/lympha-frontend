"use server";

// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

import { getUserByEmail } from "@/lib/data/user";
import { getPasswordResetRequestOtpCode } from "@/lib/data/verification-otp";
import { sendEmail } from "@/lib/mail";
import {
  generatePasswordResetRequestVerificationOtpCode,
  generateResetPasswordToken,
} from "@/lib/tokens";
import {
  getPasswordResetTokenByEmail,
  updatePassword,
} from "@/lib/data/password-reset-token";

export const forgotPassword = async (values: { email: string }) => {
  const { email } = values;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User email not found!" };
  }

  const generateOTP =
    await generatePasswordResetRequestVerificationOtpCode(email);

  await sendEmail({
    to: email,
    subject: "Reset password",
    html: `
      <div>
        <h1>Reset your password</h1> <br/><br/>
        <div>
          <p> Please use the following code to reset your password.</p> <br/>
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

  return { success: "Reset password email sent!" };
};

export const verifyPasswordResetRequestOtpCode = async ({
  otpCode,
  email,
}: {
  otpCode: string;
  email: string;
}) => {
  try {
    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
      return { error: "User email not found!" };
    }

    const existingOtpCode = await getPasswordResetRequestOtpCode({
      email,
      otpCode,
    });

    if (!existingOtpCode) {
      return { error: "Invalid otpCode!" };
    }

    const hasExpired = new Date(existingOtpCode.expires) < new Date();

    if (hasExpired) {
      return { error: "OtpCode has expired!" };
    }

    const { resetToken } = await generateResetPasswordToken(email);

    return { success: "OtpCode verified!", resetToken };
  } catch (error) {
    return { error: "OtpCode not verified!" };
  }
};

export const resetPassword = async ({
  email,
  password,
  confirmPassword,
  resetPasswordToken,
}: {
  email: string;
  password: string;
  confirmPassword: string;
  resetPasswordToken: string;
}) => {
  try {
    if (password !== confirmPassword) {
      return { error: "Passwords do not match!" };
    }

    const existingToken = await getPasswordResetTokenByEmail(email);

    if (!existingToken) {
      return { error: "Token email not found!" };
    }

    if (existingToken.resetToken !== resetPasswordToken) {
      return { error: "Invalid reset token!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const isPasswordUpdated = await updatePassword({
      email: email,
      password: hashedPassword,
    });

    if (!isPasswordUpdated) {
      return { error: "Password not updated!" };
    }

    return { success: "Password updated!" };
  } catch (error) {
    return { error: "Password not updated!" };
  }
};
