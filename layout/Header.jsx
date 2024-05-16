import Link from "next/link";
import { getRandomBgClass } from "~/utils/helper";
import LogoSvg from "~/public/svg/logo.svg";

const Header = () => {
  const bgClass = getRandomBgClass();
  return (
    <div className="bg-white shadow-md rounded-2xl max-w-[40rem] mx-auto p-2 mb-4 md:mb-6 flex justify-between">
      <div className="w-1/4 flex justify-start ">
        <Link
          href="/"
          as="/"
          className={`hover:bg-opacity-35 p-1 rounded-xl transition-colors duration-300 ease-in-out hover:bg-black-secondary`}
        >
          <span className="icon-38">
            <LogoSvg />
          </span>
        </Link>
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <span className="text-xl font-semibold text-center">Job Board</span>
      </div>
      <div className={`flex w-1/4 justify-end items-center`}>
        <Link
          href="/new"
          as="/new"
          className={`${bgClass.bg} ${bgClass.text} text-sm hover:shadow-lg h-full rounded-2xl flex items-center justify-center px-2`}
        >
          Add Job
        </Link>
      </div>
    </div>
  );
};

export default Header;
