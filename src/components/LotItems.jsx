// import React from 'react'
import React, { useState, useEffect } from "react" 
import { Link } from "react-router-dom"
function LotItems() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.18260&lng=78.02560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const result = await data.json();
    console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
   
  <div className='w-full h-full  flex-col  mt-7'>
       <div>
          <h1 className="font-bold text-2xl"> Restaurants with online food delivery in Agra</h1>
        </div>
        <div  className="h-[50px] w-[100%] flex  gap-2 mt-5  ">
          <div className="h-[35px]  w-[80px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600"> Filter </p>   <img src="/images/filter.png" alt="" className="  text-gray-600 mt-[1px] h-[15px]" />
          </button>
          </div>
          <div className="h-[35px]  w-[100px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">Sort By </p>  <i className="fi fi-ss-angle-small-down mt-[6px] text-xl text-gray-600 "></i>
          </button>
          </div>
          <div className="h-[35px]  w-[100px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">Fast Delivery </p> 
          </button>
          </div>
          <div className="h-[35px]  w-[110px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">New on Swiggy </p> 
          </button>
          </div>
          <div className="h-[35px]  w-[100px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">Ratings 4.0+ </p> 
          </button>
          </div>
          <div className="h-[35px]  w-[85px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">Pure Veg </p> 
          </button>
          </div>
          <div className="h-[35px]  w-[65px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">Offers  </p> 
          </button>
          </div>
          <div className="h-[35px]  w-[120px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">Rs. 300-Rs. 600 </p> 
          </button>
          </div>
          <div className="h-[35px]  w-[120px] rounded-xl ">
          <button className="w-full  gap-1 border flex justify-center  items-center border-gray-300 h-full rounded-2xl">
            <p className="text-[14px] text-gray-600 font-semibold font-sans">Less than Rs. 300 </p> 
          </button>
          </div>

        </div>

    <div
          className={` gap-10 grid grid-cols-4 mt-7`}>
          {
            data.map((item, i) => (
              <Link  key={i}  to={`/restaurant/${item?.info?.id}`}>
              <div key={i} className=" flex-col relative ">

                <img className=" w-[260px] h-[170px] object-cover rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`} alt="ghj" />
                {/* absolute h-[183px] w-[273px]   top-0   bg-gradient-to-t from-black from-1% to-transparent to-50% rounded-2xl */}
                 <div className="absolute h-[170px] w-[260px] top-0  bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>

                <div className="absolute top-0 pt-[135px] p-2 flex flex-col gap-1 w-full">
                  <div className="flex gap-1">
                    <p className="text-white font-bold text-xl">{item?.info?.aggregatedDiscountInfoV3 ? item?.info?.aggregatedDiscountInfoV3?.header + " "  :""}</p>
                    <p className="text-white font-bold text-xl">{item?.info?.aggregatedDiscountInfoV3 ? item?.info?.aggregatedDiscountInfoV3?.subHeader : ""} </p>
                  </div>  
                </div>  
                <div className="p-3">
                  <p className="font-bold text-lg line-clamp-1 ">{item?.info?.name}</p>
                  <div className="flex gap-2">
                    <img src="/images/circle-star.png" alt="" className=" mt-[1px] h-[21px]" />
                    <p className="font-semibold"> {item?.info?.avgRating}</p>
                    <p className="font-semibold ">{item?.info?.sla?.slaString}</p>
                  </div>
                  <p className="text-gray-600 line-clamp-1">{item?.info?.cuisines.join(", ")}</p>
                  <p className="text-gray-600">{item?.info?.areaName}</p>
                </div>
              </div>
              </Link>
            ))
          },
        </div>
  </div>
    
  )
}

export default LotItems