import Card from "./Card";
import skillsData from "./skillsData";

function Skills() {
  return (
    <section id="skills" className="">
      <h1 className="text-3xl mb-8">Selected Skills</h1>

      <div className="grid grid-cols-1 gap-x-0 gap-y-16 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {Array.from({ length: skillsData.length }).map((_, idx) => (
          <div
            key={idx}
            className="d-flex justify-content-around align-items-start"
          >
            <Card skillData={skillsData[idx]} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
