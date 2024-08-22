"use server";

import prisma from "../lib/prisma";

export const getAllProjects = async () => {

  try {
    const projects = await prisma.project.findMany();

    return { projects };
  } catch (error) {
    return { error };
  }
};
