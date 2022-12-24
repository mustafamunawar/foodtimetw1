import React from "react";

export default function CustomBulletList({ itemsArray }) {
  return (
    <ul className="mb-8 [&>*]:pt-4">
      {itemsArray.map((item, i) => {
        return (
          <li>
            <a href={item.href}>
              <item.Icon className="text-primary-600 text-xl inline mr-2" />
              {item.description}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
