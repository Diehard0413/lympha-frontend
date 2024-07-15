import Navbar from "@/components/common/Navbar";
import React from "react";
import ProjectCard from "../trading/ProjectCard";

type Props = {};

const InvestsPage = (props: Props) => {
  const projects = [
    {
      id: "1",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "2",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "3",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "4",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "5",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "6",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "7",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "8",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "9",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
  ];

  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
      <Navbar />
      <main className="w-4/5 mx-auto self-stretch flex flex-row items-start justify-center px-5 box-border max-w-full py-10">
        <section className="w-full flex flex-col items-start justify-start  gap-4 max-w-full text-left text-sm text-neutral-white">
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 gap-4 shrink-0 text-2xl text-neutral-black-6">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[140%] font-bold font-inherit mq450:text-3xl mq450:leading-[31px]">
                  Invest your Lympha Carbon Tokens in Projects
                </h1>
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[140%] font-normal font-inherit text-neutral-black-4 mq450:text-3xl mq450:leading-[31px]">
                  Here are some of the projects you can choose to invest in.
                  Some copy on these lines.
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-10">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch grid flex-row items-start justify-start gap-4 grid-cols-4">
                  {projects.map((project) => (
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
