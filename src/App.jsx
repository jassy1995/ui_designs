import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Notfound from "./views/Notfound";
import HomeManagement from "./views/HomeManagement";
import Home from "./views/Home";




function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" limit={1} />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing-page" element={<HomeManagement />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
