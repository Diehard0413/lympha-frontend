import prisma from "../prisma";

export const getProjectByProjectId = async (id: string) => {
  try {
    const project = await prisma.project.findFirst({
      where: { id },
    });

    return project;
  } catch {
    return null;
  }
};

export const getAllProjects = async () => {
  try {
    const projects = await prisma.project.findMany({ take: 10 });
    console.log(projects);

    return projects;
  } catch(error) {
    console.log(error)
    return [];
  }
}