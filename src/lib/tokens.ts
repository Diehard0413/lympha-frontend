import crypto from "crypto";
import prisma from "./prisma";

export const generateEmailVerificationOtpCode = async (email: string) => {
  const otpCode = crypto.randomInt(100000, 999999);
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const verficationToken = await prisma.emailVerificationOtpCode.create({
    data: {
      email: email,
      otpCode: otpCode.toString(),
      expires,
    },
  });

  return verficationToken;
};

export const generatePasswordResetRequestVerificationOtpCode = async (
  email: string
) => {
  const otpCode = crypto.randomInt(100000, 999999);
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const verficationToken =
    await prisma.passwordResetRequestVerificationOtpCode.upsert({
      where: {
        email: email,
      },
      update: {
        otpCode: otpCode.toString(),
        expires,
      },
      create: {
        email: email,
        otpCode: otpCode.toString(),
        expires,
      },
    });

  return verficationToken;
};

export const generateResetPasswordToken = async (email: string) => {
  // generate a jwt token
  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const passwordResetToken = await prisma.passwordResetToken.upsert({
    where: {
      email: email,
    },
    update: {
      resetToken: token,
      expires,
    },
    create: {
      email: email,
      resetToken: token,
      expires,
    },
  });

  return passwordResetToken;
};
