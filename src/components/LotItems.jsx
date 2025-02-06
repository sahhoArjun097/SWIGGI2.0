import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LotItems() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6616862&lng=77.2304635&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const result = await data.json();
    setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setTitle(result?.data?.cards[2]?.card?.card || {});
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full h-full flex flex-col mt-7 px-2 md:px-2 '>
      <h1 className="font-bold text-2xl text-center md:text-left">{title?.title}</h1>
      
      <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
        {[
          "Filter", "Sort By", "Fast Delivery", "New on Swiggy", "Ratings 4.0+", "Pure Veg", "Offers", "Rs. 300-Rs. 600", "Less than Rs. 300"
        ].map((text, index) => (
          <button 
            key={index} 
            className="px-3 py-2 border border-gray-300 rounded-2xl text-gray-600 text-sm font-semibold flex items-center gap-1">
            {text}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {data.map((item, i) => (
          <Link key={i} to={`/restaurant/${item?.info?.id}`} className="block">
            <div className="relative">
              <img 
                className="w-full h-[200px] object-cover rounded-2xl" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`} 
                alt="restaurant" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-2 left-2 text-white font-bold text-lg">
                {item?.info?.aggregatedDiscountInfoV3?.header || ""} {item?.info?.aggregatedDiscountInfoV3?.subHeader || ""}
              </div>
            </div>
            <div className="p-3">
              <p className="font-bold text-lg truncate">{item?.info?.name}</p>
              <div className="flex items-center gap-3 ">
                <div className="flex items-center gap-1">
              <i className="fi fi-ss-star mt-[1px] text-green-800 font-semibold"></i>
                <p className="font-semibold mb-[1px]">{item?.info?.avgRating}</p>
                </div>
                <p className="font-semibold">{item?.info?.sla?.slaString}</p>
              </div>
              <p className="text-gray-600 truncate">{item?.info?.cuisines.join(", ")}</p>
              <p className="text-gray-600">{item?.info?.areaName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LotItems;
