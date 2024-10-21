const Skills = () => {
  return (
    <div className="flex flex-col m-auto w-full my-40 justify-center items-center gap-5">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Skills
        </span>
      </h1>
      <div className="md:flex flex-row grid row-3 col-3 w-full md:h-[600px] h-[1800px] gap-8">
        <div className="w-full border rounded-3xl border-red-200 backdrop-blur-sm"></div>
        <div className="w-full border rounded-3xl border-cyan-100 backdrop-blur-sm"></div>
        <div className="w-full border rounded-3xl border-cyan-100 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};
export default Skills;
