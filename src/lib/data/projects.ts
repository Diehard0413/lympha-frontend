import prisma from "../prisma";

export const getProjectByProjectId = async (id: string) => {
  try {
    const project = await prisma.project.findFirst({
      where: { id },
    });

    return project;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllProjects = async () => {
  try {
    const projects = await prisma.user.findMany();
    console.log(projects);

    return [];
  } catch (error) {
    console.log(error)
    return [];
  }
}