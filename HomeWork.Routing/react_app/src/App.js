import { Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import MainPage from './pages/MainPage'
import AboutUs from './pages/AboutUs'
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
