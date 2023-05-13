import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import UsersPage from "./pages/UsersPage"
import ProductsPage from "./pages/ProductsPage"
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category_id" element={<ProductsByCategoryPage />} />
        <Route path="/product/:product_id" element={<ProductDescriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
