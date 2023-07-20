import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";

const Footer = () => {
  const vectorRef = useRef(null);
  const maskRef = useRef(null);
  const rectRef_1 = useRef(null);
  const rectRef_2 = useRef(null);
  const containerRef = useRef();
  const { linkedin } = GLOBAL_CONST;

  useEffect(() => {
    const strokeDash_1 = rectRef_1.current.getTotalLength();
    const strokeDash_2 = rectRef_2.current.getTotalLength();

    gsap.set(rectRef_1.current, {
      strokeDasharray: strokeDash_1,
      strokeDashoffset: strokeDash_1,
    });
    gsap.set(rectRef_2.current, {
      strokeDasharray: strokeDash_2,
      strokeDashoffset: strokeDash_2,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.2,
        start: "top bottom",
        end: "bottom bottom",
        trigger: containerRef.current,
      },
    });

    tl.to([rectRef_1.current, rectRef_2.current], {
      duration: 5,
      ease: "power1.inOut",
      strokeDashoffset: 0,
    })
      .to(maskRef.current, {
        duration: 5,
        "--mask-rad": 45,
        "--mask-start": 0,
        "--mask-end": 100,
        ease: "power1.inOut",
      })
      .to(
        vectorRef.current,
        {
          opacity: 1,
          scale: 1.1,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <footer ref={containerRef} className="py-[10em]">
      <Link
        href={linkedin}
        className="relative w-full h-[32em] flex items-center justify-center overflow-hidden"
      >
        <svg className="w-full h-full absolute">
          <rect
            ref={rectRef_1}
            className="w-full h-full fill-none stroke-[5] stroke-gray"
          />
        </svg>
        <img
          alt="vector"
          ref={vectorRef}
          src="./vector.svg"
          className="w-full h-full scale-125 absolute -z-10 object-cover opacity-0"
        />
        <div className="relative  w-full h-[50%] bg-black justify-center flex items-center">
          <svg className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-30">
            <rect
              ref={rectRef_2}
              className="w-full h-full fill-none stroke-[5] stroke-gray"
            />
          </svg>
          <div
            ref={maskRef}
            className="w-full h-full absolute left-0 right-0 bottom-0 top-0 z-10 [--mask-start:50] [--mask-end:50] [--mask-rad:0]"
            style={{
              backgroundImage:
                "linear-gradient(calc(var(--mask-rad) * 1deg), var(--black) calc(var(--mask-start) * 1%), transparent 0, transparent calc(var(--mask-end) * 1%), var(--black) 0)",
            }}
          />
          <span className="text-[9em]">GET IN TOUCH</span>
        </div>
      </Link>
    </footer>
  );
};

export { Footer };
