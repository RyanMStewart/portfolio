import Link from "next/link";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";
import { useEffect, useRef } from "react";

const Header = () => {
  const { linkedin } = GLOBAL_CONST;
  const nameRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(nameRef.current.children, {
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "back.inOut",
    }).to(
      linkRef.current.children,
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
    <header className="lg:portrait:em:text-5xl lg:portrait:em:py-6  flex items-center justify-between em:py-8 font-caption em:text-xl absolute left-0 right-0 overflow-hidden">
      <div ref={nameRef}>
        {"Ryan".split("").map((l, index) => (
          <span key={index} className="opacity-0">
            {l}
          </span>
        ))}
      </div>
      <Link ref={linkRef} href={linkedin} target="_blank">
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
