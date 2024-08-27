
// import React from 'react'

import LotItems from "./LotItems";
import TopItems from "./TopItems";
import WhatInMind from "./WhatInMind";

function Home() {
  return (

    <div className=' w-full   mt-4 h-full   flex justify-center '>
      <div className='  h-[100%] w-[75%] overflow-x-hidden'>
       <WhatInMind/>
        <TopItems/>
        <LotItems/>
        
        

      </div>
    </div>
   
  )
}
export default Home