import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";

const Skills = () => {
  const borderRef = useRef(null);
  const skillsRef = useRef(null);
  const circleRef = useRef(null);
  const captionRef = useRef(null);
  const containerRef = useRef(null);
  const { skillsList } = GLOBAL_CONST;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.2,
        start: "top center",
        end: "bottom center",
        trigger: containerRef.current,
      },
    });

    tl.to(captionRef.current, {
      y: 0,
      duration: 2,
      ease: "power1.out",
    })
      .to(
        circleRef.current,
        {
          opacity: 1,
          duration: 3,
          ease: "power1.out",
        },
        "<"
      )
      .to(
        Array.from(skillsRef.current.children).map((el) => el.children),
        {
          y: 1,
          duration: 3,
          stagger: 0.4,
          ease: "power1.out",
        },
        "<"
      )
      .to(borderRef.current, {
        scaleX: 1,
        duration: 3,
        ease: "power1.out",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative em:py-40 text-center">
      <div
        ref={circleRef}
        className="section-circle right-[-27em] top-[-20em] text-[1.3em] opacity-0"
      />
      <div className="overflow-hidden em:text-xl em:mb-8">
        <span ref={captionRef} className="font-caption  block translate-y-full">
          Skills
        </span>
      </div>
      <ul ref={skillsRef} className="grid grid-cols-3 em:gap-12">
        {skillsList.map(({ id, title }) => (
          <li key={id} className="text-[3.25em] overflow-hidden">
            <h2 className="translate-y-full">{title}</h2>
          </li>
        ))}
      </ul>
      <div ref={borderRef} className="section-border scale-x-0" />
    </section>
  );
};

export { Skills };
