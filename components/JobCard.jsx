import React from "react";
import Link from "next/link";
import OpenInGoogleMaps from "./OpenInGoogleMaps";
import { getRandomBgClass } from "~/utils/helper";
import LogoSvg from "~/public/svg/logo.svg";
import SendSvg from "~/public/svg/send.svg";
import HistorySvg from "~/public/svg/history.svg";
import LocationSvg from "~/public/svg/location.svg";
import ScheduleSvg from "~/public/svg/schedule.svg";
import SchoolSvg from "~/public/svg/school.svg";

const JobCard = ({ data, isJobPage, bgClass: mainBgClass }) => {
  const bgClass = mainBgClass ? mainBgClass : getRandomBgClass();

  return (
    <div className="flex flex-col shadow hover:shadow-lg rounded-xl">
      <div
        className={`p-4 ${bgClass.bg} ${bgClass.text} rounded-tl-xl rounded-tr-xl`}
      >
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex">
            <div className="h-[48px] w-[48px] rounded-lg bg-black-primary mr-3 flex items-center justify-center">
              <span className="icon-28">
                <LogoSvg />
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-semibold text-base">Sr. UX Designer</h1>
              <span className=" text-sm">Google</span>
            </div>
          </div>
          {!isJobPage && (
            <Link
              className="text-sm bg-black-primary border-black border-[1px] px-[22px] py-[6px] rounded-full h-max flex items-center hover:shadow-lg text-white"
              href="/job/[job]"
              as={`/job/${data}`}
            >
              <span>View</span>
              <span className="icon icon-white ml-1">
                <SendSvg />
              </span>
            </Link>
          )}
        </div>
        {/* Pills */}
        <div className="mt-4 flex gap-2 overflow-auto scrollbar-hidden">
          <div
            className={`flex items-center whitespace-nowrap py-1 px-3 border-[2px] ${
              bgClass.color === "yellow"
                ? "border-black bg-black"
                : "border-white bg-white"
            } border-opacity-40 bg-opacity-20 text-[13px] font-medium rounded-full`}
          >
            <span
              className={`icon-16 mr-1 ${
                bgClass.color === "yellow" ? "icon-black" : ""
              }`}
            >
              <LocationSvg />
            </span>
            New York
          </div>
          <div
            className={`flex items-center whitespace-nowrap py-1 px-3 border-[2px] ${
              bgClass.color === "yellow"
                ? "border-black bg-black"
                : "border-white bg-white"
            } border-opacity-40 bg-opacity-20 text-[13px] font-medium rounded-full`}
          >
            <span
              className={`icon-16 mr-1 ${
                bgClass.color === "yellow" ? "icon-black" : ""
              }`}
            >
              <SchoolSvg />
            </span>
            3 years exp.
          </div>
          <div
            className={`flex items-center whitespace-nowrap py-1 px-3 border-[2px] ${
              bgClass.color === "yellow"
                ? "border-black bg-black"
                : "border-white bg-white"
            } border-opacity-40 bg-opacity-20 text-[13px] font-medium rounded-full`}
          >
            <span
              className={`icon-16 mr-1 ${
                bgClass.color === "yellow" ? "icon-black" : ""
              }`}
            >
              <ScheduleSvg />
            </span>
            Fulltime
          </div>
        </div>
        {/* Description */}
        {!isJobPage && (
          <p className="text-xs mt-[18px] mb-[15px]">
            <span className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              eius iusto doloremque dolor nam dicta a mollitia numquam unde
              laudantium officia itaque, magnam minima fugit beatae, rem odio?
              Error, veritatis.
            </span>
          </p>
        )}
        {isJobPage && (
          <div className="text-sm mt-[18px]">
            <p>
              <span className="font-bold">Posted By:</span> John
            </p>
            <p>
              <span className="font-bold">Mobile No.:</span> (+91) 02228478750{" "}
            </p>
            <p>
              <span className="font-bold">Email:</span> John@gmail.com{" "}
            </p>
            <p>
              <span className="font-bold mr-1">Address:</span>{" "}
              <OpenInGoogleMaps address="35, Chandivali Village, Off Saki Vihar Rd, Saki Naka, Andheri (west), Mumbai, Maharashtra, 400059" />
            </p>
          </div>
        )}
      </div>
      <div className="bg-white p-4 flex justify-between rounded-bl-xl rounded-br-xl items-center">
        <span className="flex text-xs">
          <span className="icon-16 mr-1">
            <HistorySvg />
          </span>
          <span>Posted 2 days ago</span>
        </span>
        <span className="font-bold text-lg">$50K/mo</span>
      </div>
    </div>
  );
};

export default JobCard;
