import SkillCard from "./SkillCard";
import skillsData from "./skillsData";

function Skills() {
  return (
    // <section
    //   id="skills"
    //   className="border flex flex-col justify-start items-center px-2 lg:px-8"
    // >
    <section id="skills" className=" flex flex-col justify-start items-center ">
      <div style={{ height: "55px" }}></div>
      <h1 className="text-4xl mt-8 mb-16">Selected Skills</h1>

      <div className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {Array.from({ length: skillsData.length }).map((_, idx) => (
          <SkillCard key={idx} skillData={skillsData[idx]} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
