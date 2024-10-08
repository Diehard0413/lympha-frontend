"use client";

import Navbar from "@/components/common/Navbar";
import React, { useEffect, useState } from "react";
import ProjectCard from "../trading/ProjectCard";
import { getAllProjects } from "@/actions/project";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import configs from "@/configs";

type Props = {};

type ProjectType = {
  _id: string;
  title: string;
  email: string;
  lctId: string;
  lctTreasuryId: string;
  lctTreasuryKey: string;
  lctTotalSupply: number;
  lctAmount: number;
  letAmount: number;
  method: string;
  description: string;
  minInvest: number;
  tokensOffered: number;
  approve: boolean;
  openTrading: boolean;
}

const MyProjectPage = (props: Props) => {

  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const [myProjects, setMyProjects] = useState<ProjectType[]>([]);

  useEffect(() => {

    const fetchProjects = async () => {
      const response = await getAllProjects();
      console.log(response.data);
      const myProjects = response.data.filter((project: any) => project.email == user?.email);
      setMyProjects(myProjects);
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
                  Approve Lympha Carbon Projects
                </h1>
                <h1 className="font-inherit relative self-stretch text-base font-normal text-neutral-black-4 md:text-xl">
                  Here are the projects admin should review and approve.
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch py-10">
              <div className="flex flex-col items-start justify-start self-stretch">
                <div className="grid grid-cols-1 flex-row items-start justify-start gap-4 self-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {myProjects.map((project) => (
                    <ProjectCard key={project._id} project={project} page="my-project" />
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

export default MyProjectPage;
