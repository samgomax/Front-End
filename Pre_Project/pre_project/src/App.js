import { Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage"
import AllProductsPage from "./pages/AllProductsPage"
import SingleProductPage from "./pages/SingleProductPage"
import CartPage from "./pages/CartPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:category' element={<ProductsByCategoryPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
