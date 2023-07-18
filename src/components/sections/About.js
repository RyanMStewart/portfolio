import { GLOBAL_CONST } from "@/constance";

const About = () => {
  const { description } = GLOBAL_CONST;

  return (
    <section className="relative py-[10em]">
      <div className="section-circle top-[-20em] left-[-20em] text-[1.5em]" />
      <div className="relative w-[65em] h-[27em] mx-auto flex items-center justify-center overflow-hidden self-center mb-[10em]">
        <svg className="w-full h-full absolute">
          <rect className="w-full h-full fill-none stroke-[5] stroke-gray" />
        </svg>
        <img
          className="w-full h-full scale-110 absolute -z-10 object-cover"
          alt="vector"
          src="./vector.svg"
        />
        <div className="h-[80%] aspect-square border-[3px] border-gray overflow-hidden bg-black" />
      </div>
      <span className="font-caption text-[1.25em] text-center block mb-[2em]">
        About Me
      </span>
      <div className="flex items-baseline">
        <h1 className="text-[6em]">I'm Ryan Stewart</h1>
        <span className=" pl-[1.8em] font-caption text-[1.125em]">
          Bringing joy and betterment to people's lives while
        </span>
      </div>
      <span className="text-[1.125em] whitespace-pre leading-[3.8] font-caption">
        {description}
      </span>
      <div className="section-border" />
    </section>
  );
};

export { About };
