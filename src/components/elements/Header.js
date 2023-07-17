import Link from "next/link";

import { GLOBAL_CONST } from "@/constance";

const Header = () => {
  const { linkedin } = GLOBAL_CONST;

  return (
    <header className="flex items-center justify-between py-8 font-caption text-[1.25em] absolute left-[--gutter] right-[--gutter]">
      <span>Ryan</span>
      <Link href={linkedin} target="_blank">
        LinkedIn
      </Link>
    </header>
  );
};

export { Header };
