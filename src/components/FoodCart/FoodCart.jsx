import React from "react";

const FoodCart = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt="item image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary uppercase">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
