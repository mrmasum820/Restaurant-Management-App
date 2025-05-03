import React from "react";
import MenuItems from "../../shared/MenuItems/MenuItems";
import Cover from "../../shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({
  items,
  coverImg,
  title,
  description,
  btnTitle = "View Full Menu",
}) => {
  return (
    <div>
      {title && (
        <Cover
          bgImg={coverImg}
          title={title}
          description="Would you like to try a dish?"
        ></Cover>
      )}

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {items.map((item) => (
          <MenuItems key={item._id} items={item}></MenuItems>
        ))}
      </div>

      <div className="flex justify-center my-8">
        <Link to={`/order/${title}`}>
          {title && (
            <button className="btn btn-outline border-0 border-b-2 uppercase text-center">
              {btnTitle}
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
