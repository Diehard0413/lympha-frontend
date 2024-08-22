"use server";

import prisma from "../lib/prisma";

export const getAllProjects = async () => {

  try {
    // const projects = await prisma.project.findMany();
    const existingUser = await prisma.user.findUnique({
      where: { email: "panda141035@gmail.com" },
    });

    return { projects: existingUser };
  } catch (error) {
    return { projects: [] };
  }
};
