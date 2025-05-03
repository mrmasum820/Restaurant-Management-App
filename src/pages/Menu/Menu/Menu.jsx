import React from "react";
import Cover from "../../shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import coverImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover
        bgImg={coverImg}
        title="our menu"
        description="Would you like to try a dish?"
      ></Cover>

      {/* offered items */}
      <div className="my-10">
        <SectionTitle
          subHeading="Don't miss"
          heading="Today's offer"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>

      {/* dessert items */}
      <div className="my-10">
        <MenuCategory
          items={desserts}
          title="desserts"
          coverImg={dessertImg}
          btnTitle="Order Your Favourite Dessert"
        ></MenuCategory>
      </div>

      {/* pizza items */}
      <div className="my-10">
        <MenuCategory
          items={pizzas}
          title="pizza"
          coverImg={pizzaImg}
          btnTitle="Order Your Favourite Pizza"
        ></MenuCategory>
      </div>

      {/* salad items */}
      <div className="my-10">
        <MenuCategory
          items={salads}
          title="salads"
          coverImg={saladImg}
          btnTitle="Order Your Favourite Salad"
        ></MenuCategory>
      </div>

      {/* soup items */}
      <div className="my-10">
        <MenuCategory
          items={soups}
          title="soups"
          coverImg={soupImg}
          btnTitle="Order Your Favourite Soup"
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
