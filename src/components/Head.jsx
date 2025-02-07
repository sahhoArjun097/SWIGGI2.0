import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tooglepopbar } from "../utils/toogleSlice";
import { useState } from "react";

function Head() {
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const userData = useSelector((state) => state.authSlice.userData);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.toogleSlice.searchToogle);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleArrowGo() {
    dispatch(tooglepopbar());
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Cart", icon: "fi fi-ss-shopping-cart", path: "/cart" },
    { name: "Sign In", icon: "fi fi-br-sign-in-alt", path: "/sign" },
  ];

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-10 bg-black/40 flex justify-start">
          <div className="w-[80%] sm:w-[40%] h-full bg-white overflow-y-hidden p-6">
            <p className="flex text-black" onClick={handleArrowGo}>
              <i className="fi fi-rr-cross-small text-3xl"></i>
            </p>
            {/* Search bar */}
            <div className="mt-6 h-14 w-full border shadow-lg">
              <input
                type="text"
                placeholder="Search for area, street name.."
                className="w-full p-4 border border-gray-400 shadow-md focus:outline-gray-100"
              />
            </div>
            {/* Location section */}
            <div className="mt-6 h-20 flex items-center border shadow-lg p-2 gap-3">
              <i className="fi fi-tr-location-crosshairs text-lg"></i>
              <div className="hover:text-orange-500">
                <p>Get current location</p>
                <p className="text-xs text-gray-400">Using GPS</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div className="h-16 w-full shadow-md flex items-center justify-between px-4 sm:px-10 relative bg-white">
        {/* Logo & Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/image.png" alt="Logo" className="h-10 sm:h-11" />
          </Link>
          <p className="hidden sm:block text-sm text-cyan-800 border-b-2 font-bold border-b-neutral-800">Other</p>
          <button onClick={handleArrowGo} className="text-orange-500 text-xl sm:hidden">
            <i className="fi fi-ss-angle-small-down"></i>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item, index) => (
            item.name == "Sign In" ?
              <Link to={item.path} key={index} className="flex gap-2 items-center text-gray-600 hover:text-orange-500">
                {userData ? <img src={userData?.photo} className="h-9  w-9 rounded-3xl" alt="" /> : <i className={`${item.icon} text-lg`}></i>}
                <p className="font-bold">{userData ? userData.name : item.name} </p>
                {userData && item.name === "Cart" && cartData.length > 0 && (
                  <span className="text-white bg-orange-500 text-xs rounded-full px-2 py-0.5">
                    {cartData.length}
                  </span>
                )}

              </Link>
              : <Link to={item.path} key={index} className="flex gap-2 items-center text-gray-600 hover:text-orange-500">
                <i className={`${item.icon} text-lg`}></i>
                <p className="font-bold">{item.name}</p>
                {userData && item.name === "Cart" && cartData.length > 0 && (
                  <span className="text-white bg-orange-500 text-xs rounded-full px-2 py-0.5">
                    {cartData.length}
                  </span>
                )}
              </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="sm:hidden text-xl">
          <i className="fi fi-rr-menu-burger"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 flex justify-end">
          <div className="w-2/3 h-full bg-white p-6 flex flex-col gap-6">
            <button onClick={toggleMobileMenu} className="text-3xl self-end">
              <i className="fi fi-rr-cross-small"></i>
            </button>
            {navItems.map((item, index) => (
              item.name == "Sign In" ?
                <Link to={item.path} key={index} className="flex gap-2 items-center text-gray-600 hover:text-orange-500">
                  {userData ? <img src={userData?.photo} className="h-9  w-9 rounded-3xl" alt="" /> : <i className={`${item.icon} text-lg`}></i>}
                  <p className="font-bold">{userData ? userData.name : item.name} </p>
                  {userData && item.name === "Cart" && cartData.length > 0 && (
                    <span className="text-white bg-orange-500 text-xs rounded-full px-2 py-0.5">
                      {cartData.length}
                    </span>
                  )}
                </Link>
                : <Link to={item.path} key={index} className="flex gap-2 items-center text-gray-600 hover:text-orange-500">
                  <i className={`${item.icon} text-lg`}></i>
                  <p className="font-bold">{item.name}</p>
                  {userData && item.name === "Cart" && cartData.length > 0 && (
                    <span className="text-white bg-orange-500 text-xs rounded-full px-2 py-0.5">
                      {cartData.length}
                    </span>
                  )}
                </Link>
            ))}
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
}

export default Head;
