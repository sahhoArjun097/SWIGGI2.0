import '@flaticon/flaticon-uicons/css/all/all.css';

import { useState } from "react"
import Head from './components/Head'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import { CardContext, Visibility } from "./context/contextapi";
// import TopItems from './components/TopItems'
export const App = () => {
  const [open, setOpen] = useState(false);
  const [cartData,setCartData]= useState([{}])
  return (
    <CardContext.Provider value={{cartData,setCartData}}>
    <Visibility.Provider value={{ open, setOpen }}>
      <div className={open ? " min-h-full" : " "}>
        <Routes>
          <Route path="/" element={<Head />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/restaurant/:id' element={<RestaurantDetails />} />
          </Route>
        </Routes>
      </div>
    </Visibility.Provider>
    </CardContext.Provider>

  )
}
export default App

