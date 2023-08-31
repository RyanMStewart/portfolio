import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Introduction = () => {
  const titleRef_1 = useRef(null);
  const titleRef_2 = useRef(null);
  const titleRef_3 = useRef(null);
  const circleRef_1 = useRef(null);
  const circleRef_2 = useRef(null);
  const captionRef_1 = useRef(null);
  const captionRef_2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(titleRef_1.current.children, {
      delay: 1,
      opacity: 1,
      duration: 2,
      stagger: {
        each: 0.1,
        from: "random",
      },
      ease: "power2.inOut",
    })
      .to(
        captionRef_1.current.children,
        {
          opacity: 1,
          duration: 3,
          stagger: 0.1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        titleRef_2.current.children,
        {
          opacity: 1,
          duration: 2,
          stagger: {
            each: 0.1,
            from: "random",
          },
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        captionRef_2.current.children,
        {
          opacity: 1,
          duration: 3,
          stagger: 0.1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        titleRef_3.current.children,
        {
          opacity: 1,
          duration: 2,
          stagger: {
            each: 0.1,
            from: "random",
          },
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        [circleRef_1.current, circleRef_2.current],
        {
          opacity: 1,
          duration: 3,
          stagger: 0.3,
          ease: "sine.inOut",
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="flex justify-center items-center h-screen">
      <div
        ref={circleRef_1}
        className="section-circle right-[-20em] top-[-15em] text-[1.3em] opacity-0"
      />
      <div
        ref={circleRef_2}
        className="section-circle top-[calc(var(--vh)*52)] left-[-20em] text-[1.5em] opacity-0"
      />
      <div className="flex flex-col">
        <div className="flex flex-row items-center em:gap-x-16">
          <div ref={titleRef_1} className="text-10xl">
            {"SENIOR".split("").map((l, index) => (
              <span key={index} className="opacity-0">
                {l}
              </span>
            ))}
          </div>
          <div
            ref={captionRef_1}
            className="em:text-lg whitespace-pre font-caption em:pt-4 flex flex-col"
          >
            {"With over 10 years\nof experience in designing and\ndeveloping websites & web and\nmobile applications...."
              .split("\n")
              .map((line, index) => (
                <span key={index} className="opacity-0 ">
                  {line}
                </span>
              ))}
          </div>
        </div>
        <div ref={titleRef_2} className="text-10xl">
          {"SOFTWARE".split("").map((l, index) => (
            <span key={index} className="opacity-0">
              {l}
            </span>
          ))}
        </div>
        <div className="flex flex-row items-center em:gap-x-8">
          <div
            ref={captionRef_2}
            className="em:text-lg whitespace-pre font-caption em:pt-4 flex flex-col"
          >
            {"Based in:\nSan Antonio,\nTexas\nUnited States"
              .split("\n")
              .map((line, index) => (
                <span key={index} className="opacity-0">
                  {line}
                </span>
              ))}
          </div>
          <div ref={titleRef_3} className="text-10xl">
            {"ENGINEER".split("").map((l, index) => (
              <span key={index} className="opacity-0">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Introduction };
