import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { GLOBAL_CONST } from "@/constance";
import { useResize } from "@/hooks";

const Experiences = () => {
  const borderRef = useRef(null);
  const circleRef = useRef(null);
  const captionRef = useRef(null);
  const containerRef = useRef(null);
  const experiencesListRef = useRef(null);
  const { experiencesList } = GLOBAL_CONST;
  const [selected, setSelected] = useState(null);
  const cancelSelectedTimestamp = useRef(null);

  const { orientation } = useResize({});

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

    const listTimelines = [];

    list.forEach((element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1.2,
          trigger: element,
          start: "-20% center",
          end: "130% center",
        },
      });

      listTimelines.push(tl);

      const title = element.querySelector("#experiencesTitle");
      const details = element.querySelector("#experiencesDetails");

      tl.to(title, {
        opacity: 1,
        duration: 3,
        ease: "power1.out",
      }).to(details.children, {
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
      listTimelines.forEach((t) => t.kill());
    };
  }, [orientation]);

  const onSelectItem = (id) => {
    clearTimeout(cancelSelectedTimestamp.current);
    setSelected(id);

    cancelSelectedTimestamp.current = setTimeout(() => {
      setSelected(null);
    }, 3000);
  };

  return (
    <section ref={containerRef} className="relative em:py-40 text-center">
      <div
        ref={circleRef}
        className="section-circle left-[-28em] top-[-15em] opacity-0"
      />
      <div className="lg:portrait:em:text-5xl overflow-hidden em:text-xl em:mb-8">
        <span
          ref={captionRef}
          className="font-caption block translate-y-full will-change-transform"
        >
          Experiences
        </span>
      </div>
      <ul ref={experiencesListRef} className="lg:portrait:em:text-xl">
        {experiencesList.map(
          ({ id, title, caption, date, description }, index) => (
            <li
              onClick={onSelectItem.bind(null, id)}
              key={id}
              className={cn("group flex flex-col relative group", {
                "em:pt-20": index >= 1,
              })}
            >
              <div className="hover-effect w-1/2 h-1/4 blur-[100px]" />
              <h3
                className="em:text-6xl opacity-0 will-change-transform"
                id="experiencesTitle"
              >
                {title}
              </h3>
              <div
                className="flex flex-row justify-center font-caption em:text-lg em:mt-4 overflow-hidden"
                id="experiencesDetails"
              >
                <span className="translate-y-full">{caption}</span>
                <span className="mx-[0.7em] translate-y-full">•</span>
                <span className="translate-y-full">{date}</span>
              </div>
              <div className="em:mt-7 em:text-lg overflow-hidden">
                <p
                  className={cn(
                    "transition-transform duration-700 font-caption whitespace-pre translate-y-full will-change-transform",
                    {
                      "translate-y-0": id === selected,
                    }
                  )}
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
