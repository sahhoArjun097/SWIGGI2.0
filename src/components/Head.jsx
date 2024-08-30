import { Link, Outlet } from "react-router-dom"


function Head() {

  const navItems = [
    {
      name: "Swiggy Corporate",
      image: <i className="fi fi-rr-shopping-bag text-2xs"></i>
    },
    {
      name: "Search",
      image: <i className="fi fi-rr-search text-2xs"></i>
    },

    {
      name: "Offers",
      image: <i className="fi fi-rr-shopping-bag text-2xs"></i>
    },
    {
      name: "Help",
      image: <i className="fi fi-sr-life-ring text-2xs "></i>
    },

    {
      name: "Sign In",
      image: <i className="fi fi-br-sign-in-alt text-2xs"></i>
    },
    {
      name: "Cart",
      image: <i className="fi fi-ss-shopping-cart text-2xs"></i>
    },


  ]
  return (


    <>

      <div className="h-16 w-full shadow-md flex items-center justify-center  ">
        <div className="flex  w-[90%] justify-between ">

          <div className="w-1/4  h-14 items-center flex justify-center  gap-4">
            <div className="items-center flex justify-center  gap-7">
              <Link to="/">
              <img src="/images/swiggi.png" alt="" className="h-11" />
              </Link>
              
              <p className="text-2xs text-cyan-800 border-b-2 font-bold border-b-neutral-800">Other</p>
            </div>
            <div className="mt-2">
              <i className="fi fi-ss-angle-small-down text-xl text-orange-500"></i>
            </div>
          </div>



          <div className="md:flex hidden w-3/5 h-14  items-center justify-evenly gap-5  ">
            {navItems.map((data, index) => (
              <div key={index} className="flex gap-2">
                <div className="mt-0">
                  <p className="text-gray-500">
                    {data.image}
                  </p>
                </div>
                <p className="font-bold text-gray-600 cursor-pointer "> {data.name}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
      <Outlet />
    </>
  )
}

export default Head