import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/users" element={<UsersPage/>} />
      </Routes>
    </div>
  );
}

export default App;
