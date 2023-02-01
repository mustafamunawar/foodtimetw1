// export default function FoodCard({ type, name, imageFile, price }) {
//   console.log(name);
//   return (
//     <section className="">
//       <div className="">{type}</div>
//       <div className="">
//         <img src={"/images" + imageFile} alt="" />
//       </div>
//       <div className="">{name}</div>
//       <div className="">{price}</div>
//     </section>
//   );
// }
import { Ellipse } from "../Patches";

export default function FoodCard(props) {
  const { type, name, imageFile, price } = props.foodData;
  return (
    <>
      <section
        style={{ transformStyle: "preserve-3d" }}
        className="border transition transform duration-700 hover:shadow-xl hover:scale-105 py-6 flex flex-col gap-5 items-center w-96 rounded-lg border-0 border-gray-200 bg-lightbg-cards dark:bg-darkbg-cards"
      >
        {/* <Ellipse
          cx="100%"
          cy="0%"
          rx="10%"
          ry="10%"
          opacity=".8"
          degrees="0deg"
        /> */}

        <div className="ml-2 self-start font-normal text-primary-700 bg-primary-200 border-2 border-primary-400 rounded-3xl px-3 py-1">
          {type}
        </div>

        {/* <div className="flex gap-x-6 justify-start items-center pl-4 pt-4"> */}
        {/* <img className="object-cover w-16 h-16" src={imgSrc} alt={title} /> */}
        <img
          src={"/images1/" + imageFile}
          alt="xxx"
          className="p-6 scale-125"
        />
        {/* </div> */}
        <h4 className="font-light text-xl tracking-tight">{name}</h4>
        <div className="">
          <div className="text-2xl">{price}</div>
        </div>
        <button className="text-xl text-white bg-primary-600 rounded-3xl px-6 py-2">
          Add to Cart
        </button>
      </section>
    </>
  );
}
