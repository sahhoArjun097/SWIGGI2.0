import { useContext} from "react"
import { Link, Outlet } from "react-router-dom"
import { Visibility } from "../context/contextapi"

function Head() {
const{open,setOpen} = useContext(Visibility);

  function handleArrowClick(){

    setOpen((prev)=> !prev)
    setOpen("overflow-hidden")
   
  }   
  function handleArrowGo(){
    setOpen((prev)=> !prev)

  }
  

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
    {
      open &&
      <div className="w-full h-[100vh] absolute z-40 bg-black/40  ">
      <div className="w-[40%] h-full bg-white overflow-y-hidden">
        <div className="  w-full h-full p-10 flex  flex-col justify-items-end gap-7">
        <p className="flex  text-black" onClick={handleArrowGo}> <i className="fi fi-rr-cross-small text-3xl"></i></p>
        <div className="h-14 w-[400px] border shadow-lg">
        <input 
        type="text" 
        placeholder="Search for area, street name.." 
        className="w-full p-4 border border-gray-400 shadow-md  focus:outline-gray-100 "/> 
        </div>
        <div className="h-20 w-[400px] flex border shadow-lg gap-3
          p-2">
          <div className="flex  ">

        <i className="fi fi-tr-location-crosshairs mt-1"></i>
          </div>
        <div className="flex-col hover:text-orange-500 ">
          <p className="">Get current location</p>
          <p className="text-xs text-gray-400">Using GPS</p>
        </div>
        </div>

        </div>
      </div>
    </div>

    }
   
      <div className="h-16 w-full shadow-md flex items-center  relative justify-center  ">
        <div className="flex  w-[90%] justify-between ">

          <div className="w-1/4  h-14 items-center flex justify-center  gap-4">
            <div className="items-center flex justify-center  gap-7">
              <Link to="/">
              <img src="/images/swiggi.png" alt="" className="h-11" />
              </Link>
              
              <p className="text-2xs text-cyan-800 border-b-2 font-bold border-b-neutral-800">Other</p>
            </div>
            <div className="mt-2 " onClick={handleArrowClick}>
              <i className="fi fi-ss-angle-small-down text-xl text-orange-500"></i>
            </div>
          </div>



          <div className="w-3/5 h-14  items-center flex justify-evenly gap-5  ">
            {navItems.map((data, index) => (
              <div key={index} className="flex gap-2">
                <div className="mt-0 group  " >
                  <p className="text-gray-500 hover:text-orange-500">
                    {data.image}
                  </p>
                </div>
                <p className="font-bold text-gray-600 cursor-pointer hover:text-orange-500  "> {data.name}</p>
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