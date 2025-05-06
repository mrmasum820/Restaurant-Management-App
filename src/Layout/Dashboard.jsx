import React from "react";
import {
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineMenu, MdOutlineRateReview } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { IoMenu } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
import { RiContactsBook2Fill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="md:w-2/6 min-h-screen bg-orange-400">
        <ul className="p-4">
          {isAdmin ? (
            <>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/adminHome">
                  <div className="flex items-center gap-2">
                    <FaHome />
                    <span>Admin Home</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/reservation">
                  <div className="flex items-center gap-2">
                    <FaUtensils />
                    <span>Add Items</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/payment">
                  <div className="flex items-center gap-2">
                    <MdOutlineMenu />
                    <span>Manage Items</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/review">
                  <div className="flex items-center gap-2">
                    <RiContactsBook2Fill />
                    <span>Manage Bookings</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/users">
                  <div className="flex items-center gap-2">
                    <FaUsers />
                    <span>All Users</span>
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/userHome">
                  <div className="flex items-center gap-2">
                    <FaHome />
                    <span>User Home</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/reservation">
                  <div className="flex items-center gap-2">
                    <SlCalender />
                    <span>Reservation</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/payment">
                  <div className="flex items-center gap-2">
                    <FaWallet />
                    <span>Payment History</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/review">
                  <div className="flex items-center gap-2">
                    <MdOutlineRateReview />
                    <span>Add Review</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/booking">
                  <div className="flex items-center gap-2">
                    <LuNotebookPen />
                    <span>My Bookings</span>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2 font-semibold">
                <NavLink to="/dashboard/cart">
                  <div className="flex items-center gap-2">
                    <TfiMenuAlt />
                    <span>My Cart ({cart?.length || 0})</span>
                  </div>
                </NavLink>
              </li>
            </>
          )}

          {/* all users can see */}
          <div className="divider"></div>

          <li className="mb-2 font-semibold">
            <NavLink to="/">
              <div className="flex items-center gap-2">
                <FaHome />
                <span>Home</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/order/salads">
              <div className="flex items-center gap-2">
                <IoMenu />
                <span>Menu</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/order/salads">
              <div className="flex items-center gap-2">
                <FaShoppingBag />
                <span>Order</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 font-semibold">
            <NavLink to="/dashboard/contact">
              <div className="flex items-center gap-2">
                <BiEnvelope />
                <span>Contact</span>
              </div>
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
