"use server";

import prisma from "../lib/prisma";

export const getAllProjects = async () => {

  try {
    const projects = await prisma.project.findMany();

    return { projects: projects };
  } catch (error) {
    return { projects: "error while finding" };
  }
};
