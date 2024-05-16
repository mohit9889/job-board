import React from "react";
import Link from "next/link";
import { getRandomBgClass } from "~/utils/helper";
import JobCard from "~/components/JobCard";
import EditSvg from "~/public/svg/edit.svg";
import TaskSvg from "~/public/svg/task.svg";
import PersonSvg from "~/public/svg/person.svg";
import BenefitsSvg from "~/public/svg/benefits.svg";
import LeftArrowSvg from "~/public/svg/left-arrow.svg";
import HeartSvg from "~/public/svg/heart.svg";

const Header = ({ icon, heading }) => (
  <div className="flex mb-3 items-center">
    <span className="icon-24 bg-black-secondary p-2 rounded-lg mr-2 icon-white">
      {icon}
    </span>
    <h1 className="text-lg font-bold">{heading}</h1>
  </div>
);

const Job = () => {
  const bgClass = getRandomBgClass();
  return (
    <div className="md:w-[40rem] mx-auto">
      <Link
        href="/"
        as="/"
        className="flex items-center mb-4 px-4 py-2 bg-black-secondary border-2 border-black w-max text-white rounded-full text-sm bg-opacity-90 hover:shadow-lg"
      >
        <span className="icon-12 icon-white mr-1">
          <LeftArrowSvg />
        </span>
        Back
      </Link>
      <JobCard isJobPage bgClass={bgClass} />
      <div className="flex flex-col p-[20px] bg-white mt-4 rounded-xl shadow">
        <Header icon={<EditSvg />} heading="Job Description" />
        <p className="text-sm">
          In a UX Designer job, you'll need both types of skills to develop the
          next generation of products. You'll partner with Researchers and
          Designers to define and deliver new features.
        </p>
      </div>
      <div className="flex flex-col p-[20px] bg-white mt-4 rounded-xl shadow">
        <Header icon={<TaskSvg />} heading="Skills & Requirements" />
        <p className="text-sm">
          3 years experience Degree in Computer Science, Psychology, Design or
          any other related fields. Proficiency in User Personas, Competitive
          Analysis, Empathy Maps and Information Architecture.
        </p>
      </div>
      <div className="flex flex-col p-[20px] bg-white mt-4 rounded-xl shadow">
        <Header icon={<PersonSvg />} heading="Your Role" />
        <p className="text-sm">
          As a UX Designer, you will be directly responsible for helping the
          evolution of enterprise design systems at Google. You will engineer
          solutions that create shareable web components to be used in
          enterprise products within the organization. You’ll support multiple
          different product areas and collaborate with multiple job functions
          across the globe.
        </p>
      </div>
      <div className="flex flex-col p-[20px] bg-white mt-4 rounded-xl shadow">
        <Header icon={<BenefitsSvg />} heading="Benefits" />
        <p className="text-sm">
          As a UX Designer, you will be directly responsible for helping the
          evolution of enterprise design systems at Google. You will engineer
          solutions that create shareable web components to be used in
          enterprise products within the organization. You’ll support multiple
          different product areas and collaborate with multiple job functions
          across the globe.
        </p>
      </div>

      <button
        className={`h-[50px] rounded-full mt-4 w-full hover:shadow-xl flex items-center justify-center ${bgClass.bg} ${bgClass.text}`}
      >
        <span
          className={`icon-24 mr-1 ${
            bgClass.color === "yellow" ? "icon-black" : "icon-white"
          }`}
        >
          <HeartSvg />
        </span>
        Have you applied for the job
      </button>
    </div>
  );
};

export default Job;
