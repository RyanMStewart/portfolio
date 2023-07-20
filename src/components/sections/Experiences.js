import cn from "classnames";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";

const Experiences = () => {
  const borderRef = useRef(null);
  const circleRef = useRef(null);
  const captionRef = useRef(null);
  const containerRef = useRef(null);
  const experiencesListRef = useRef(null);
  const { experiencesList } = GLOBAL_CONST;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.2,
        start: "top center",
        end: "10% center",
        trigger: containerRef.current,
      },
    });
    const list = Array.from(experiencesListRef.current.children);

    tl.to(captionRef.current, {
      y: 0,
      duration: 2,
      ease: "power1.out",
    }).to(
      circleRef.current,
      {
        opacity: 1,
        duration: 4,
        ease: "power1.out",
      },
      "<"
    );

    list.forEach((element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1.2,
          trigger: element,
          start: "-20% center",
          end: "130% center",
        },
      });

      const title = element.querySelector("#experiencesTitle");
      const details = element.querySelector("#experiencesDetails");
      const description = element.querySelector("#experiencesDescription");

      tl.to(title, {
        opacity: 1,
        duration: 3,
        ease: "power1.out",
      })
        .to(details.children, {
          y: 0,
          duration: 3,
          stagger: 0.5,
          ease: "power1.out",
        })
        .to(
          description,
          {
            y: 0,
            duration: 5,
            ease: "power1.out",
          },
          "<"
        );
    });

    gsap.to(borderRef.current, {
      scaleX: 1,
      duration: 3,
      ease: "power1.out",
      scrollTrigger: {
        scrub: 1.2,
        end: "120% bottom",
        start: "100% bottom",
        trigger: containerRef.current,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-[10em] text-center">
      <div
        ref={circleRef}
        className="section-circle left-[-28em] top-[-15em] opacity-0"
      />
      <div className="overflow-hidden text-[1.25em] mb-[2em] ">
        <span
          ref={captionRef}
          className="font-caption block translate-y-full will-change-transform"
        >
          Experiences
        </span>
      </div>
      <ul ref={experiencesListRef}>
        {experiencesList.map(
          ({ id, title, caption, date, description }, index) => (
            <li
              key={id}
              className={cn("flex flex-col relative group", {
                "pt-[5em]": index >= 1,
              })}
            >
              <h3
                className="text-[3.75em] opacity-0 will-change-transform"
                id="experiencesTitle"
              >
                {title}
              </h3>
              <div
                className="flex flex-row justify-center font-caption text-[1.125em] mt-[0.5em] overflow-hidden"
                id="experiencesDetails"
              >
                <span className="translate-y-full">{caption}</span>
                <span className="mx-[0.7em] translate-y-full">•</span>
                <span className="translate-y-full">{date}</span>
              </div>
              <div className="mt-[1.7em] text-[1.125em] overflow-hidden">
                <p
                  className="font-caption whitespace-pre leading-[1.8] translate-y-full will-change-transform"
                  id="experiencesDescription"
                >
                  {description}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
      <div ref={borderRef} className="section-border scale-x-0" />
    </section>
  );
};

export { Experiences };
