import ThreeDot from "./ThreeDot";

const Myskills = () => {
  const skills = {
    languages: ["C", "JavaScript", "TypeScript", "Node.Js"],
    frameworks: ["Next.js", "tailwind", "Express"],
    frontend: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "SCSS"],
    testing: ["Jest", "React Testing Library"],
    databases: ["MongoDB", "Firebase"],
    devops: ["Git", "GitHub", "CI/CD", "Docker"],
    automation: [],
    build: ["Vite", "Webpack", "Babel", "ESLint"],
    other: [
      "RESTful APIs",
      "GraphQL",
      "Responsive Design",
      "Agile/Scrum",
      "VS Code",
    ],
  };
  return (
    <>
      <div id="skills" className="skills max-w-7xl flex flex-col justify-center items-center mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Skills & Expertise</h1>
        <p className="font-bold max-w-3xl text-center">
          Comprehensive technical expertise across modern web technologies,
          frameworks, and development practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center h-full mt-7">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="flex flex-col gap-5 border-1 border-gray-400 rounded-lg h-[180px] px-5 py-3"
            >
              <ThreeDot />
              <div className="text-3xl font-bold">
                {"</>"} <span className="capitalize">{category}</span>
              </div>
              <div className="grid grid-cols-3 md:flex md:flex-row gap-2">
                {skillList.map((skill) => (
                  <div
                    key={skill}
                    className="text-xs px-2 py-1 border-1 border-gray-500 rounded-md text-gray-500"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Myskills;
