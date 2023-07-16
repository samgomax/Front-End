import './App.css';
import {Route, Routes} from 'react-router-dom';
import NavMenu from './components/Nav_Menu';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import SalesPage from './pages/SalesPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { MapContainer } from 'react-leaflet';



function App() {

  return <>
    <NavMenu />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/categories/:id' element={<ProductsByCategoryPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<SingleProductPage />} />
      <Route path='/sales' element={<SalesPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='*' element={<NotFoundPage />} />

    </Routes>
    <MapContainer />

  </>
}

export default App;










// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

//Hooks Rules:
//1. Naming, name of hooks should start from prefix - USE
//2. hooks should be used only inside Components and Hooks
  // a) const getData = () => {
  //   useEffect(() => {
  //     console.log('Hello World');
  //   });
  // };
//3. Hooks could not called inside statement
//4. Hooks could not called async