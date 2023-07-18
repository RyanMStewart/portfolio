import Link from "next/link";

import { GLOBAL_CONST } from "@/constance";

const Footer = () => {
  const { linkedin } = GLOBAL_CONST;

  return (
    <footer className="py-[10em]">
      <Link
        href={linkedin}
        className="relative w-full h-[32em] flex items-center justify-center overflow-hidden"
      >
        <svg className="w-full h-full absolute">
          <rect className="w-full h-full fill-none stroke-[5] stroke-gray" />
        </svg>
        <img
          className="w-full h-full scale-110 absolute -z-10 object-cover"
          alt="vector"
          src="./vector.svg"
        />
        <span className="text-[9em] bg-black w-full text-center border-[3px] border-gray pt-[0.2em] pb-[0.3em]">
          GET IN TOUCH
        </span>
      </Link>
    </footer>
  );
};

export { Footer };
