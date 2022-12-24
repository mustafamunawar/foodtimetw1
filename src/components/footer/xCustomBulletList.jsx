import React from "react";

export default function CustomBulletList({ itemsArray }) {
  return (
    <ul className="mb-8 [&>*]:pt-4">
      {itemsArray.map((item, i) => {
        return (
          <li>
            <a href={item.href}>
              <img
                className="w-6 h-6 text-xl inline mr-2 bg-red-600 text-red-600"
                src={item.iconSrc}
                // src={require(`.${item.iconSrc}`)}
                alt={" "}
              />
              {item.description}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
