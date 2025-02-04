/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext, Visibility } from "../context/contextapi";

function Head() {
  const { open, setOpen } = useContext(Visibility);
  const { cartData } = useContext(CartContext);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  const navItems = [
    { name: "Swiggy Corporate", icon: "fi-rr-shopping-bag", path: "/corporate" },
    { name: "Search", icon: "fi-rr-search", path: "/search" },
    { name: "Offers", icon: "fi-rr-tag", path: "/offer" },
    { name: "Help", icon: "fi-sr-life-ring", path: "/help" },
    { name: "Sign In", icon: "fi-br-sign-in-alt", path: "/signin" },
    { name: "Cart", icon: "fi-ss-shopping-cart", path: "/cart" },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="w-72 bg-white shadow-lg h-full p-6">
            <button onClick={toggleMenu} className="text-black text-2xl">
              <i className="fi fi-rr-cross-small"></i>
            </button>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search area, street name..."
                className="w-full p-2 border rounded-lg focus:outline-gray-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="h-16 w-full shadow-md flex items-center bg-white px-6 md:px-10 lg:px-20">
        <div className="flex w-full justify-between items-center">
          {/* Logo & Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/image.png" alt="Logo" className="h-10" />
            </Link>
            <button onClick={toggleMenu} className="text-orange-500 text-2xl md:hidden">
              <i className="fi fi-ss-bars"></i>
            </button>
          </div>

          {/* Navigation */}
          <nav className=" md:flex space-x-6">
            {navItems.map(({ name, icon, path }, index) => (
              <Link key={index} to={path} className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
                <i className={`fi ${icon} text-lg`}></i>
                <span className="font-semibold">{name}</span>
                {name === "Cart" && cartData.length > 0 && (
                  <span className="text-white bg-orange-500 text-xs rounded-full px-2 py-0.5">{cartData.length}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Head;