const Introduction = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="section-circle right-[-10em] top-[-15em] text-[1.3em]" />
      <div className="text-10xl flex flex-col">
        <div className="flex flex-row items-center gap-x-[0.25em]">
          <span>SENIOR</span>
          <span className="text-lg whitespace-pre font-caption pt-[1em]">
            {
              "With over 5 years\nof experience in designing and\ndeveloping websites & web and\nmobile applications..."
            }
          </span>
        </div>
        <span>SOFTWARE</span>
        <div className="flex flex-row items-center gap-x-[0.25em]">
          <span className="text-lg whitespace-pre font-caption pt-[1em]">
            {"Based in:\nSan Antonio,\nTexas\nUnited States"}
          </span>
          <span>ENGINEER</span>
        </div>
      </div>
    </section>
  );
};

export { Introduction };
