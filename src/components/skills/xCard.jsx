import React from "react";
import UList from "./UList";

export default function Card(props) {
  const { title, imgSrc, imgPosition, text, buttonVariant, buttonText } =
    props.skillData;
  return (
    <section className="w-80 rounded-lg shadow-md h-64">
      <img className="object-cover w-16 h-16" src={imgSrc} alt="image" />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {title}
        </h4>
        <UList itemsArray={text} />
        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Read more
        </button> */}
      </div>
    </section>
  );
}