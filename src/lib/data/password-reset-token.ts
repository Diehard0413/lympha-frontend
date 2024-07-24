import prisma from "../prisma";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findUnique({
      where: { resetToken: token },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findFirst({
      where: { email },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const updatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await prisma.user.update({
      where: { email },
      data: {
        password,
      },
    });

    return true;
  } catch {
    return false;
  }
};
