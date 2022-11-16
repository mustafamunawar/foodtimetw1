import foodsData from "./foodsData";
import FoodCard from "./FoodCard";

function Foods({ type }) {
  return (
    // <section
    //   id="skills"
    //   className="border flex flex-col justify-start items-center px-2 lg:px-8"
    // >
    <section
      id={type}
      className="flex flex-col justify-start items-center py-8 "
    >
      <div style={{ height: "55px" }}></div>
      <h1 className="text-4xl mt-8 mb-16">{type} Menu</h1>

      <div className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {foodsData
          .filter((foodData) => foodData.type === type)
          .map((foodData) => (
            <FoodCard key={foodData.id} foodData={foodData} />
          ))}
      </div>
    </section>
  );
}

export default Foods;
