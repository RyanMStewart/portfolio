import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";

const Education = () => {
  const borderRef = useRef(null);
  const circleRef_1 = useRef(null);
  const circleRef_2 = useRef(null);
  const captionRef = useRef(null);
  const containerRef = useRef(null);
  const educationListRef = useRef(null);
  const { educationList } = GLOBAL_CONST;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.2,
        start: "top center",
        end: "30% center",
        trigger: containerRef.current,
      },
    });
    const list = Array.from(educationListRef.current.children);

    tl.to(captionRef.current, {
      y: 0,
      duration: 2,
      ease: "power1.out",
    }).to([circleRef_1.current, circleRef_2.current], {
      opacity: 1,
      stagger: 1,
      duration: 4,
      ease: "power1.out",
    });

    list.forEach((element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1.2,
          trigger: element,
          start: "-20% center",
          end: "130% center",
        },
      });

      const title = element.querySelector("#educationTitle");
      const date = element.querySelector("#educationDate");
      const caption = element.querySelector("#educationCaption");

      tl.to(title, {
        opacity: 1,
        duration: 3,
        ease: "power1.out",
      }).to([date, caption], {
        y: 0,
        duration: 3,
        stagger: 0.5,
        ease: "power1.out",
      });
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
    <section ref={containerRef} className="py-[10em] relative text-center">
      <div
        ref={circleRef_1}
        className="section-circle left-[-28em] top-[5em] text-[1.2em] opacity-0"
      />
      <div
        ref={circleRef_2}
        className="section-circle right-[-22em] top-[15em] text-[1.5em] opacity-0"
      />
      <div className="overflow-hidden text-[1.25em] mb-[2em]">
        <span
          ref={captionRef}
          className="font-caption translate-y-full block will-change-transform"
        >
          Education
        </span>
      </div>
      <ul ref={educationListRef} className="flex flex-col gap-y-[5.5em]">
        {educationList.map(({ id, title, caption, date }) => (
          <li key={id} className="flex flex-col relative text-[3.25em]">
            <h3 id="educationTitle" className="opacity-0">
              {title}
            </h3>

            <div className="overflow-hidden">
              <span
                id="educationDate"
                className="will-change-transform translate-y-full block"
              >
                {date}
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                id="educationCaption"
                className="will-change-transform translate-y-full block"
              >
                {caption}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div ref={borderRef} className="section-border scale-x-0" />
    </section>
  );
};

export { Education };
