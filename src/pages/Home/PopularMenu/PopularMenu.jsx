import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-16">
      <SectionTitle
        subHeading="Check it out"
        heading="From Our Menu"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItems key={item._id} items={item}></MenuItems>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="btn btn-outline border-0 border-b-2 uppercase text-center">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
