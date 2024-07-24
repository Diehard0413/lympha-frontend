"use server";

import bcrypt from "bcryptjs";
import { getUserByEmail } from "../lib/data/user";
import { updatePassword } from "@/lib/data/password-reset-token";

export const newPassword = async (values: {
  email: string;
  oldPassword: string;
  newPassword: string;
}) => {
  const { email, oldPassword, newPassword } = values;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User not registered!" };
  }

  const isPasswordValid = await bcrypt.compare(
    oldPassword,
    existingUser.password
  );

  if (!isPasswordValid) {
    return { error: "Invalid password!" };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const isPasswordUpdated = await updatePassword({
    email,
    password: hashedPassword,
  });

  if (!isPasswordUpdated) {
    return { error: "Failed to update password!" };
  }

  return { success: "Password updated!" };
};
