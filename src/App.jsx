import '@flaticon/flaticon-uicons/css/all/all.css';

import Head from './components/Head'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
// import TopItems from './components/TopItems'
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Head/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
      </Route>
      
      
    </Routes>
  )
}
export default App

