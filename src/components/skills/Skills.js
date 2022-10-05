import Card from "./Card";
import skillsData from "./skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center py-8 px-2 lg:px-8"
    >
      <h1 className="text-4xl mb-16">Selected Skills</h1>

      <div className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {Array.from({ length: skillsData.length }).map((_, idx) => (
          <Card key={idx} skillData={skillsData[idx]} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
