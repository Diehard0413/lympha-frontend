import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const SampleProjectTokens = (props: Props) => {
  const projects = [
    {
      _id: "1",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "2",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "3",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "4",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "5",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "6",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "7",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "8",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
    {
      _id: "9",
      title: "Project Title",
      email: "",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
      approved: false
    },
  ];

  return (
    <div className="flex shrink-0 flex-col items-start justify-start gap-4 self-stretch px-0 pb-0 pt-6 text-neutral-black-6">
      <div className="flex flex-col items-start justify-start self-stretch">
        <div className="flex flex-col items-start justify-start self-stretch">
          <h1 className="font-inherit relative self-stretch text-xl font-bold tracking-tight md:text-2xl">
            Invest your Lympha Carbon Tokens in Projects
          </h1>
          <h1 className="font-inherit relative m-0 self-stretch text-base font-normal tracking-tight text-neutral-black-4 md:text-lg">
            Here are some of the projects you can choose to invest in. Some copy
            on these lines.
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start self-stretch">
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="grid grid-cols-1 flex-row items-start justify-start gap-4 self-stretch sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProjectTokens;
