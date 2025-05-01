import React from "react";

const MenuItems = ({ items }) => {
  const { name, recipe, image, price } = items;
  return (
    <div className="flex space-x-4">
      <img
        style={{ width: "118px", borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt="menu images"
      />
      <div>
        <h3>{name} -----------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItems;
