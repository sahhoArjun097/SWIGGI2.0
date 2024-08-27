import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function RestaurantDetails() {
  const { id } = useParams();
  // console.log(id);

  const [menu, setMenu] = useState("")
  const [value, setValue] = useState(0);
  const [bgColor, setBgColor] = useState('bg-slate-300');
  const [backgColor, setBackgColor] = useState('bg-slate-200');
  const [info, setMenuinfo] = useState("");
  const [deals, setOffer] = useState([])
  const[extra,setExtra] = useState([])

  // const[inner,setInner]=useState([])
  async function fetchMenu() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.18260&lng=78.02560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    const result = await data.json();
    console.log(result?.data?.cards)  
    setMenu(result?.data?.cards[0]?.card?.card?.text)
    setMenuinfo(result?.data?.cards[2]?.card?.card?.info)
    setOffer(result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
    let  sort = (result?.data?.cards)?.filter(data=>data?.groupedCard?.cardGroupMap) 
    console.log(sort)
    let actualData = (sort[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data => data?.card?.card?.itemCards)
    let cakeData = (sort[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data => data?.card?.card?.categories)
    console.log(actualData)
    console.log(cakeData)
    setExtra(actualData)?.filter((data)=> data?.card?.card?.titles)
    console.log(actualData?.card?.card)?.filter((data)=> data?.itemCards)

    // let combinedData = [...(actualData || []), ...(cakeData || [])];
    // setExtra(combinedData)?.filter((data)=> data?.card?.card?.titles)
// console.log(combinedData)
    // console.log(combinedData)?.filter((data)=> data?.card?.card?.itemCards)


    // let more = (combinedData)


   
    // console.log(setExtra)  
    // setInner(setExtra?.card?.card)
    // console.log(setInner)
    // console.log(sort[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.map(data=>data?.card?.card?.itemCards?.card?.info?.name)
  }
  function handlePrev() {
    if (value < 60) {
      setValue((prev) => prev + 15);
    }
    if (value < 60) {
      setBgColor('bg-slate-300');
    } else {
      setBgColor('bg-slate-200');
      setBackgColor('bg-slate-300');
      // setColor('text-gray-900')
    }
  }
  function handleNext() {
    if (value > 0) {
      setValue((prev) => prev - 15)
    }
    if (value > 0) {
      setBackgColor('bg-slate-300');
      // setColor('text-gray-400')
    } else {
      setBackgColor('bg-slate-200');
      setBgColor('bg-slate-300');
      // setColor('text-gray-900');
    }
  }
  useEffect(() => {
    fetchMenu()
  }, []);
  return (
    <>
      <div className='h-[100%] mt-5 w-[100vw] flex justify-center items-center  ' >
        <div className='h-[100%] w-[45%] flex-col gap-5  pl-2'>
          <div className='flex-col '>
            <div className='h-10  gap-2  w-full flex'>
              <p className='text-xs text-gray-600 text-[7px]'>Home /</p>
              <p className='text-xs text-gray-600 text-[7px]'>Agra /</p>
              <p className="  text-[7px] text-xs">{menu}</p>
            </div>
          </div>
          <div className='w-full '>
            <div className='w-full h-full p-3  '>
              <p className='font-bold text-xl'>{menu}</p>
            </div>
          </div>
          <div className='w-full h-6'>
            <div className='flex w-full pl-6  gap-5'>
              <p className='text-[14px]  font-bold'>Order Online</p>
              <p className='text-[14px]  font-bold '>Dineout</p>
            </div>
            <div className='w-[95px] bg-red-500 h-[3px] ml-5 mt-1 rounded-lg '></div>
            <hr className='border-b-0'/>
          </div>
          <div className=' w-full p-3 from-gray-300  rounded-3xl  bg-gradient-to-t from-1% to-transparent to-100%  '>
            <div className=' border  mt-2 h-36 w-[100%] bg-white p-3 rounded-2xl'>
              <div className='w-[400px]  gap-2   justify-start flex items-start'>
                <img src="/images/circle-star.png" alt="" className=" mt-[3px] h-[15px]" />
                <p className='text-[13px] font-bold'>{info?.avgRatingString}( {info?.totalRatingsString})</p>
                <p className='  ' ></p>
                <p className='text-[13px] font-bold'>{info?.costForTwoMessage}</p>
              </div>
              <div className='w-[200px]   justify-start flex items-start'>
                <p className='text-[12px] font-bold text-orange-600 underline'>{info?.cuisines?.join(", ")}</p>
              </div>
              <div className='w-[400px] flex gap-3  pt-[3px]'>
                <div className='flex-col justify-center flex items-center'>
                  <div className='w-[6px] h-[6px] mt-[8px]  bg-gray-300 rounded-full'></div>
                  <div className='h-[20px] w-2  flex justify-center  items-center'>
                    <div className='h-full w-[1px] bg-gray-300'></div>
                  </div>
                  <div className='w-[6px] h-[6px] bg-gray-300 rounded-full'></div>
                </div>
                <div className='flex-col'>
                  <div className='flex gap-2'>
                    <div className='h-[20px] gap-3 flex'>
                      <p className='text-[13px] font-bold'>Outlet</p>
                      <p className='text-[13px] font-semibold'>{info?.areaName}</p>
                    </div>
                  </div>
                  <div className='mt-2' >
                    <p className='text-[12px] font-bold'>{`${info?.sla?.minDeliveryTime} - ${info?.sla?.maxDeliveryTime} min`}</p>
                  </div>
                </div>

              </div>
              <hr />
              <div className='w-full h-full pt-2'>
                <div className='  flex gap-3'>
                  <i className="fi fi-rs-biking-mountain text-[13px] text-gray-500"></i>
                  <p className='text-[10px]  text-gray-500 font-semibold'>{info?.feeDetails?.message}</p>
                </div>
              </div>

            </div>
          </div>

          <div className='h-40 w-[100%] mt-5 flex-col overflow-x-hidden'>
            <div className='ml-1 flex justify-between p-3'>
              <p className='font-bold text-lg'>Deals for you</p>
              <div className='flex gap-3 '>
                <div onClick={handlePrev} className={`${bgColor}  cursor-pointer rounded-[50%] w-[35px] items-center justify-center flex `}>
                  <i className={`fi fi-tr-arrow-small-right text-2xl mt-1  `}></i>
                </div>
                <div onClick={handleNext} className={` ${backgColor} rounded-[50%]   cursor-pointer  w-[35px] items-center justify-center flex `}>
                  <i className={`fi fi-tr-arrow-small-left text-2xl mt-1 `}></i>
                </div>
              </div>
            </div>
            <div className='flex ml-4 w-[100vw] gap-5 ' >

              <div style={{ transform: `translateX(-${value}%)` }}
                className={` flex duration-1000 gap-5 w-full h-full`}>
                {
                  deals.map((item, i) => (
                    <div key={i} className='w-[270px] h-16 border flex   rounded-2xl'>
                      <div className='p-2'>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${item?.info?.offerLogo}`} alt="" className=" h-[41px] " />
                      </div>
                      <div className='p-2 flex-col'>
                        <p className='font-bold text-[14px] '> {item?.info?.header}</p>
                        <p className='font-semibold text-gray-400 text-[12px] line-clamp-1'>{item?.info?.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className=''>
              <p className='font-extralight text-gray-500 text-[15px]'>MENU</p>
            </div>
          </div>
          <div className='w-full h-20  flex justify-center items-center'>
            <div className='w-[90%] h-10 bg-gray-100 border-b-1 rounded-xl flex justify-center items-center  cursor-pointer'>
              <div className='w-[80%] pl-14 h-full flex justify-center items-center'>
                <p className='text-[12px] text-gray-500 '>Search for dishes</p>
              </div>
              <div className=' w-[10%]  h-full flex justify-end items-center'>
                <i className="fi fi-rr-search text-xs text-gray-500"></i>
              </div>
            </div>
          </div>
          <div>   
          </div>
          <hr/>
          <div className='gap-5 flex-col'>
                {/* {
                  extra.map((items,i)=>(
                    <div key={i} className='gap-5 flex-col'> 
                 <div className='justify-between flex'>
                  <p>{items?.card?.card?.title}{items?.card?.itemcard}</p>
                  <i className="fi fi-rr-angle-small-down"></i>
                 </div>
                 <div className='h-[200px] w-full'>
                   {
                    inner.map((items,i)=>(
                      <div key={i}>
                        {items?.card?.info?.name}
                        </div>
                    ))
                   }
                 </div>
                 <hr/>
                    </div>
                  ))
                } */}
        
                {
                  extra.map(({card:{card: {title}}},i)=>(
                    <div key={i}>
                       <div className='flex justify-between'>
                      <h1>{title}</h1>
                    
                      <i className="fi fi-rr-angle-small-down"></i>
                    </div>
                    {/* {
                      inner.map((item,i)=>(
                        <div key={i}>
                          <p>{item?.card?.info?.name}</p>
                          </div>
                      ))
                    } */}
                    <hr/>
                    </div>
              
                  ))
                }
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantDetails