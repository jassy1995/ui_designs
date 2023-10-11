import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Notfound from "./views/Notfound";
import HomeManagement from "./views/HomeManagement";
import Home from "./views/Home";
import HeroSection from "./views/HeroSection";




function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" limit={1} />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smart-home" element={<HomeManagement />} />
            <Route path="/hero-section" element={<HeroSection />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
