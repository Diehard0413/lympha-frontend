import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const SampleProjectTokens = (props: Props) => {
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
    <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 gap-4 shrink-0 text-neutral-black-6">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h1 className="self-stretch relative text-xl md:text-2xl tracking-tight font-bold font-inherit">
            Invest your Lympha Carbon Tokens in Projects
          </h1>
          <h1 className="m-0 self-stretch relative text-base md:text-lg tracking-tight font-normal font-inherit text-neutral-black-4">
            Here are some of the projects you can choose to invest in. Some copy
            on these lines.
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch grid flex-row items-start justify-start gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProjectTokens;
