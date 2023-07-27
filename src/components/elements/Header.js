import Link from "next/link";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";
import { useEffect, useRef } from "react";

const Header = () => {
  const { linkedin, github } = GLOBAL_CONST;
  const nameRef = useRef(null);
  const linkRef_1 = useRef(null);
  const linkRef_2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(nameRef.current.children, {
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "back.inOut",
    })
      .to(
        linkRef_1.current.children,
        {
          opacity: 1,
          duration: 2,
          stagger: 0.2,
          ease: "back.inOut",
        },
        "<"
      )
      .to(
        linkRef_2.current.children,
        {
          opacity: 1,
          duration: 2,
          stagger: 0.2,
          ease: "back.inOut",
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="lg:portrait:em:text-5xl lg:portrait:em:py-6  flex items-center em:py-8 font-caption em:text-xl absolute left-0 right-0 overflow-hidden">
      <div ref={nameRef}>
        {"Ryan".split("").map((l, index) => (
          <span key={index} className="opacity-0">
            {l}
          </span>
        ))}
      </div>
      <Link
        target="_blank"
        ref={linkRef_1}
        className="ml-auto em:mr-12"
        href={github}
      >
        {"GitHub".split("").map((l, index) => (
          <span key={index} className="opacity-0">
            {l}
          </span>
        ))}
      </Link>
      <Link target="_blank" href={linkedin} ref={linkRef_2}>
        {"LinkedIn".split("").map((l, index) => (
          <span key={index} className="opacity-0">
            {l}
          </span>
        ))}
      </Link>
    </header>
  );
};

export { Header };
