import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import ProductPage from './pages/ProductsPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import ProductDescrPage from './pages/ProductDescrPage';


function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element= {<ProductPage />} />
        <Route path='/cart' element= {< CartPage />} />
        <Route path='/product/:id' element= {< ProductDescrPage />} />
      </Routes>
    </div>
  );
}

export default App;
