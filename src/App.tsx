import { Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

import Home from "./Pages/Home/Home";
import BioPages from "./Pages/BioPages/BioPages";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Faqs from "./Pages/Faqs/Faqs";
import Login from "./Pages/Login/Login";
import Pricing from "./Pages/Pricing/Pricing";
import QRcodes from "./Pages/QRcodes/QRcodes";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/qr-codes" element={<QRcodes />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/bio" element={<BioPages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
