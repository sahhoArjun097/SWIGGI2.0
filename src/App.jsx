import '@flaticon/flaticon-uicons/css/all/all.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Head from './components/Head';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import Cart from './components/Cart';
import Footer from './components/Footer';
import SignPage from './components/SignPage'

export const App = () => {
  const open = useSelector((state) => state.toggleSlice?.searchToogle)

  return (
    <div className={open ? "min-h-screen overflow-x-hidden" : ""}>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign" element={<SignPage/>} />
        <Route path="*" element={
          <div className='w-full h-[100vh] flex justify-center items-center'>
            <h1 className='text-4xl font-bold text-orange-500 p-8'>Coming Soon</h1>
          </div>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
