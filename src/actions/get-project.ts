"use server";

import prisma from "../lib/prisma";

export const getAllProjects = async () => {

  try {
    // const projects = await prisma.project.findMany();
    const project = await prisma.project.findFirst({
      where: { email: "panda141035@gmail.com" },
    });

    return { projects: project };
  } catch (error) {
    return { projects: [] };
  }
};
