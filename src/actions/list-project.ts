"use server";

import prisma from "../lib/prisma";

export const listNewProject = async (values: any) => {
  const { title, email } = values;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!existingUser) {
      return {
        error: "User email doesn't exist!",
      };
    }
    
    await prisma.project.create({
      data: {
        title,
        email,
        approved: false
      },
    });

    console.log("Project listed successfully!");
    return {
      success: "Project successfully listed!",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to list project!",
    };
  }
};
