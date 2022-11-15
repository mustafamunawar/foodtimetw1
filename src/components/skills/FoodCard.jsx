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

export default function FoodCard(props) {
  const { type, name, imageFile, price } = props.foodData;
  return (
    <section className="w-80 rounded-lg shadow-md h-72 bg-white">
      <div className="">{type}</div>

      <div className="flex gap-x-6 justify-start items-center pl-4 pt-4">
        {/* <img className="object-cover w-16 h-16" src={imgSrc} alt={title} /> */}
        <img src={"/images/" + imageFile} alt="xxx" />
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {name}
        </h4>
      </div>
      <div className="p-4">
        <div className="">{price}</div>
      </div>
    </section>
  );
}
