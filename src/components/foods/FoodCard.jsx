
import { useContext } from 'react';
import { AppContext } from '../AppContext';
export default function FoodCard(props) {
  const { type, name, imageFile, price } = props.foodData;
  const ctx = useContext(AppContext);

  return (
    <>
      <section className="bg-opacity-50 transition transform duration-700 hover:shadow-xl hover:scale-105 py-6 flex flex-col gap-5 items-center w-96 rounded-lg border-0 border-primary-200 bg-lightbg-cards dark:bg-darkbg-cards dark:bg-opacity-50">
        <div className="ml-2 self-start font-normal text-primary-700 bg-primary-200 border-2 border-primary-400 rounded-3xl px-3 py-1">
          {type}
        </div>

        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
          <img
            src={"./foodtimetw1/images1/" + imageFile}
            alt="xxx"
            className="p-6 scale-125"
          />
        </div>
        {/* </div> */}
        <h4 className="font-light text-xl tracking-tight">{name}</h4>
        <div className="">
          <div className="text-2xl">{price}</div>
        </div>
        <button onClick={() => ctx.setPoppedItem( {name:name, price:price,photo:"/images1/" +imageFile} )} className="text-xl text-white bg-primary-600 rounded-3xl px-6 py-2">
          Add to Cart
        </button>
      </section>
    </>
  );
}
