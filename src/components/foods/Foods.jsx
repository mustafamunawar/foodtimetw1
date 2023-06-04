import foodsData from "./foodsData";
import FoodCard from "./FoodCard";

function Foods({ type, addToCart }) {
  var intro = "";
  var sub_intro = "";
  if (type === "Breakfast") {
    intro = "Start your day right with the healthiest items.";
    sub_intro =
      "Enjoy a delightful breakfast with our carefully-selected breakfest items.";
  }
  if (type === "Dinner") {
    intro =
      "Enjoy a scrumptious dinner with our mouth-watering dinner menu. Enjoy a full-course meal with our wide selection of only the highest-quality items.";
  }

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
      <h1 className="text-5xl   font-light max-w-5xl  opacity-60  text-center mt-8">
        {intro}
      </h1>
      <h1 className="text-4xl   font-thin max-w-3xl  opacity-60  text-center mt-3 mb-16">
        {sub_intro}
      </h1>
      <h1 className="text-4xl mt-8 mb-16">{type} Menu</h1>

      <div className="grid grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {foodsData
          .filter((foodData) => foodData.type === type)
          .map((foodData) => (
            <FoodCard
              key={foodData.id}
              addToCart={addToCart}
              foodData={foodData}
            />
          ))}
      </div>
    </section>
  );
}

export default Foods;
