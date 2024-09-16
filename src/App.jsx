import '@flaticon/flaticon-uicons/css/all/all.css';

import { useEffect, useState } from "react"
import Head from './components/Head'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import { CartContext, Visibility } from "./context/contextapi";
import Cart from './components/Cart';
// import TopItems from './components/TopItems'
export const App = () => {
  const [open, setOpen] = useState(false);
  const [cartData,setCartData] = useState([])


  function getDataFormLocalStorage(){
    let data = JSON.parse(localStorage.getItem("cardData")) || []
    setCartData(data)
  }
  useEffect(()=>{
    getDataFormLocalStorage()
  },[])


  return (
    
    <CartContext.Provider value={ {cartData,setCartData}}>
    <Visibility.Provider value={{ open, setOpen }}>
      <div className={open ? " min-h-full" : " "}>
        <Routes>
          <Route path="/" element={<Head />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/restaurant/:id' element={<RestaurantDetails />}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='*' element={<h1>comming soon</h1>}/>
          </Route>

        </Routes>
      </div>
    </Visibility.Provider>
    </CartContext.Provider>


  )
}
export default App

