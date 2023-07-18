import { GLOBAL_CONST } from "@/constance";

const Skills = () => {
  const { skillsList } = GLOBAL_CONST;

  return (
    <section className="relative py-[10em] text-center">
      <div className="section-circle right-[-27em] top-[-20em] text-[1.3em]" />
      <span className="font-caption text-[1.25em] mb-[2em] block">Skills</span>
      <ul className="grid grid-cols-3 gap-[3em]">
        {skillsList.map(({ id, title }) => (
          <li key={id} className="text-[3.25em]">
            <h2>{title}</h2>
          </li>
        ))}
      </ul>
      <div className="section-border" />
    </section>
  );
};

export { Skills };
