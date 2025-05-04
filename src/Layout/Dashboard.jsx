import React from "react";
import { FaHome, FaWallet } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="md:w-2/6 min-h-screen bg-orange-400">
        <ul className="p-4">
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/userHome">
              {/* <FaHome /> */}
              User Home
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/reservation">
              {/* <SlCalender /> */}
              Reservation
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/payment">
              {/* <FaWallet /> */}
              Payment History
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/review">
              {/* <MdOutlineRateReview /> */}
              Add Review
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/booking">
              {/* <LuNotebookPen /> */}
              My Booking
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/cart">
              {/* <TfiMenuAlt /> */}
              My Cart ({cart?.length || 0})
            </NavLink>
          </li>
          {/* divider */}
          <div className="divider"></div>

          <li className="mb-2 font-semibold">
            <NavLink to="/">
              {/* <FaHome /> */}
              Home
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/order/salads">
              {/* <FaHome /> */}
              Menu
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/order/salads">
              {/* <FaHome /> */}
              Order
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/contact">
              {/* <FaHome /> */}
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="md:w-4/6 flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
