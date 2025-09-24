import "./App.css";
import "es6-promise/auto";
import "intersection-observer";
import "./pages/Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import SafetyTips from "./pages/SafetyTips";
import OrderPreview from "./pages/OrderPreview";
// import NoPage from './pages/NoPage';
import Billpreview from "./pdf/Billpreview";
import SiteOff from "./pages/SiteOff";
import Home from "./pages/Home";
import About from "./pages/About";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/safetytips" element={<SafetyTips />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/orderpreview" element={<OrderPreview />} />
          <Route path="/nopage" element={<Billpreview />} />
          <Route path="/siteoff" element={<SiteOff />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
