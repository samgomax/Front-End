import './App.css'
import { Routes, Route } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<CategoriesPage/>} />
        <Route path='/products/:category_id' element= {<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
