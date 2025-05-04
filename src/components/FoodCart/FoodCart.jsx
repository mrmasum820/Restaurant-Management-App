import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    // console.log(item, user.email);
    if (user && user.email) {
      // send user to database
      // console.log(user.email, item);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added on the cart",
            showConfirmButton: false,
            timer: 1500,
          });
          // update cart state
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="px-10 pt-10">
        <img src={image} alt="item image" className="rounded-xl" />
      </div>
      <p className="bg-slate-900 text-white w-16 text-center absolute right-0 top-0 mt-12 mr-12">
        ${price}
      </p>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-2 border-yellow-600 uppercase text-center"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
