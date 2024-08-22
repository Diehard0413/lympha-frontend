"use server";

import prisma from "../lib/prisma";

export const getAllProjects = async () => {

  try {
    const projects = await prisma.passwordResetToken.findMany();

    return { projects: projects };
  } catch (error) {
    return { projects: "error while finding" };
  }
};
