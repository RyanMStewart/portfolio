import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";
import { useResize } from "@/hooks";

const About = () => {
  const avatarRef = useRef(null);
  const nameRef = useRef(null);
  const captionRef = useRef(null);
  const rectRef_1 = useRef(null);
  const rectRef_2 = useRef(null);
  const vectorRef = useRef(null);
  const borderRef = useRef(null);
  const containerRef = useRef(null);
  const descriptionRef_1 = useRef(null);
  const descriptionRef_2 = useRef(null);
  const { description } = GLOBAL_CONST;

  const { orientation } = useResize({});

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

    const tl_1 = gsap.timeline({
      scrollTrigger: {
        scrub: 1.2,
        start: "top 80%",
        end: "center 80%",
        trigger: containerRef.current,
      },
    });
    const tl_2 = gsap.timeline({
      scrollTrigger: {
        scrub: 1.2,
        start: "60% bottom",
        end: "120% bottom",
        trigger: containerRef.current,
      },
    });

    tl_1
      .to([rectRef_1.current, rectRef_2.current], {
        duration: 5,
        ease: "power1.inOut",
        strokeDashoffset: 0,
      })
      .to(
        avatarRef.current,
        {
          scale: 1,
          duration: 5,
          ease: "power1.out",
        },
        "<"
      )
      .to(vectorRef.current, {
        opacity: 1,
        scale: 1.1,
        duration: 3,
        ease: "power1.inOut",
      });

    tl_2
      .to(captionRef.current, {
        y: 0,
        duration: 2,
        ease: "power1.out",
      })
      .to(
        nameRef.current.children,
        {
          opacity: 1,
          duration: 4,
          stagger: 0.1,
          ease: "power1.in",
        },
        "<"
      )
      .to(
        [
          descriptionRef_1.current,
          Array.from(descriptionRef_2.current.children).map(
            (el) => el.children
          ),
        ],
        {
          y: 1,
          duration: 3,
          stagger: 0.4,
          ease: "power1.out",
        },
        "<+1"
      )
      .to(borderRef.current, {
        scaleX: 1,
        duration: 3,
        ease: "power1.out",
      });

    return () => {
      tl_1.kill();
      tl_2.kill();
    };
  }, [orientation]);

  return (
    <section className="relative em:py-40" ref={containerRef}>
      <div className="relative w-[65em] h-[27em] mx-auto flex items-center justify-center overflow-hidden self-center em:mb-40">
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
        <div className="h-[80%] aspect-square overflow-hidden z-index-1 relative">
          <img
            ref={avatarRef}
            src="./avatar.png"
            alt="Ryan Stewart"
            className="w-full h-full object-cover bg-black scale-125"
          />
          <svg className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-30">
            <rect
              ref={rectRef_2}
              className="w-full h-full fill-none stroke-[5] stroke-yellow"
            />
          </svg>
        </div>
      </div>
      <div className="lg:portrait:em:text-5xl em:mb-8 font-caption em:text-xl text-center overflow-hidden">
        <span
          ref={captionRef}
          className="block translate-y-full will-change-transform"
        >
          About Me
        </span>
      </div>
      <div className="lg:portrait:flex-col flex items-baseline">
        <h1 className="lg:portrait:em:text-9xl em:text-8xl" ref={nameRef}>
          {"I'm Ryan Stewart".split("").map((l, index) => (
            <span key={index} className="opacity-0">
              {l}
            </span>
          ))}
        </h1>
        <div className="lg:portrait:em:text-[2em]  lg:portrait:em:mt-6 lg:portrait:pl-0 overflow-hidden em:text-lg pl-[1.8em]">
          <span
            ref={descriptionRef_1}
            className=" font-caption translate-y-full will-change-transform block"
          >
            Bringing joy and betterment to people's lives while
          </span>
        </div>
      </div>
      <div
        ref={descriptionRef_2}
        className="lg:portrait:em:text-[2em] em:text-lg font-caption"
      >
        {description.split("\n").map((line, index) => (
          <div
            key={index}
            ref={descriptionRef_2}
            className="overflow-hidden em:mt-6"
          >
            <span
              key={index}
              className="block translate-y-full will-change-transform"
            >
              {line}
            </span>
          </div>
        ))}
      </div>
      <div ref={borderRef} className="section-border scale-x-0" />
    </section>
  );
};

export { About };
