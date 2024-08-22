"use client";

import Navbar from "@/components/common/Navbar";
import React, { useEffect, useState } from "react";
import ProjectCard from "../trading/ProjectCard";
import { getAllProjects } from "@/actions/get-project";

type Props = {};

type ProjectType = {
  id: string;
  title: string;
  email: string;
  method: string;
  description: string;
  minInvest: number;
  tokensOffered: number;
  approved: boolean;
}

const InvestsPage = (props: Props) => {
  // const projects = [
  //   {
  //     id: "1",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "2",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "3",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "4",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "5",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "6",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "7",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "8",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  //   {
  //     id: "9",
  //     title: "Project Title",
  //     method: "XYZ",
  //     description:
  //       "The Convertible project is bringing new solutions to the automotive and...",
  //     minInvest: 2000,
  //     tokensOffered: 47333834,
  //   },
  // ];

  const [approvedProjects, setApprovedProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {

      const response = await getAllProjects();
      console.log("projects", response.projects);
      const approvedProjects = response.projects.filter((project) => project.approved)
      console.log("approvedProjects", approvedProjects);
      setApprovedProjects(approvedProjects);
    }

    fetchProjects();

  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden font-proxima [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd]">
      <Navbar />
      <main className="mx-auto box-border flex w-11/12 max-w-full flex-row items-start justify-center self-stretch py-10 sm:w-5/6 md:w-4/5 md:px-5">
        <section className="flex w-full max-w-full flex-col items-start justify-start gap-4 text-left text-sm text-neutral-white">
          <div className="flex shrink-0 flex-col items-start justify-start gap-4 self-stretch px-0 pb-0 pt-6 text-neutral-black-6">
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="flex flex-col items-start justify-start self-stretch">
                <h1 className="relative m-0 self-stretch text-xl font-bold tracking-tight md:text-2xl">
                  Invest your Lympha Carbon Tokens in Projects
                </h1>
                <h1 className="font-inherit relative self-stretch text-base font-normal text-neutral-black-4 md:text-xl">
                  Here are some of the projects you can choose to invest in.
                  Some copy on these lines.
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch py-10">
              <div className="flex flex-col items-start justify-start self-stretch">
                <div className="grid grid-cols-1 flex-row items-start justify-start gap-4 self-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {approvedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvestsPage;
