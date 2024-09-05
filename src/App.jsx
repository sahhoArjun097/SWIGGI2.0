import '@flaticon/flaticon-uicons/css/all/all.css';

import { useState} from "react"
import Head from './components/Head'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import { Visibility } from "./context/contextapi";
// import TopItems from './components/TopItems'
export const App = () => {
  const [open,setOpen] = useState(false);
  return (
    <Visibility.Provider value={{open,setOpen}}>

    <div className={open ? "  max-h-screen overflow-hidden" : " "}>
 <Routes>
      <Route path="/" element={<Head/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
      </Route>
    </Routes>
    </div>
    </Visibility.Provider>
   
  )
}
export default App

