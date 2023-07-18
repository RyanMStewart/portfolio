import { GLOBAL_CONST } from "@/constance";

const Education = () => {
  const { educationList } = GLOBAL_CONST;

  return (
    <section className="py-[10em] relative text-center">
      <div className="section-circle left-[-28em] top-[5em] text-[1.2em]" />
      <div className="section-circle right-[-22em] top-[15em] text-[1.5em]" />
      <span className="font-caption text-[1.25em] mb-[2em] block">
        Education
      </span>
      <ul className="flex flex-col gap-y-[5.5em]">
        {educationList.map(({ id, title, caption, date }) => (
          <li key={id} className="flex flex-col relative text-[3.25em]">
            <h3>{title}</h3>
            <span>{date}</span>
            <span>{caption}</span>
          </li>
        ))}
      </ul>
      <div className="section-border" />
    </section>
  );
};

export { Education };
