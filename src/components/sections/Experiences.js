import cn from "classnames";

import { GLOBAL_CONST } from "@/constance";

const Experiences = () => {
  const { experiencesList } = GLOBAL_CONST;

  return (
    <section className="relative py-[10em] text-center">
      <div className="section-circle left-[-28em] top-[-15em]" />
      <span className="font-caption text-[1.25em] mb-[2em] block">
        Experiences
      </span>
      <ul>
        {experiencesList.map(
          ({ id, title, caption, date, description }, index) => (
            <li
              key={id}
              className={cn("flex flex-col relative group", {
                "pt-[5em]": index >= 1,
              })}
            >
              <h3 className="text-[3.75em]">{title}</h3>
              <div className="flex flex-row justify-center font-caption text-[1.125em] mt-[0.5em]">
                <span>{caption}</span>
                <span className="mx-[0.7em]">•</span>
                <span>{date}</span>
              </div>
              <div className="mt-[1.7em] text-[1.125em] overflow-hidden">
                <p className="font-caption whitespace-pre leading-[1.8] translate-y-full">
                  {description}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
      <div className="section-border" />
    </section>
  );
};

export { Experiences };
