"use server";

// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

import prisma from "../lib/prisma";
import { getUserByEmail } from "@/lib/data/user";
import {
  getEmailVerificationOtpCodeByEmail,
  sendVerificationEmail,
} from "@/lib/data/verification-otp";

import configs from '../configs';

export const createUserWallet = async () => {
  const response = await fetch(`${configs.API_URL}/wallet/create_wallet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  console.log(response);
  console.log(response.json());

  return response.json();
}

export const registerNewUser = async (values: any) => {
  const { name, email, password, confirmPassword } = values;

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return {
        error: "Email already taken!",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await createUserWallet();
    
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        walletId: ''
      },
    });

    await sendVerificationEmail(email);
    console.log("Email sent successfully!");
    return {
      success: "User successfully created!",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to create user!",
    };
  }
};

export const verifyEmailVerificationOtpCode = async ({
  otpCode,
  email,
}: {
  otpCode: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User email not found!" };
  }

  const existingOtpCode = await getEmailVerificationOtpCodeByEmail({
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

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingOtpCode.email,
    },
  });

  await prisma.emailVerificationOtpCode.delete({
    where: { id: existingOtpCode.id },
  });

  return { success: "Email is verified" };
};
