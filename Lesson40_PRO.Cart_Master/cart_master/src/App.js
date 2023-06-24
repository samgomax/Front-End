import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import ProductPage from './pages/ProductsPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';


function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element= {<ProductPage />} />
        <Route path='/cart' element= {< CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
