import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import WishList from "./components/wishlist/WishList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/element" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </>
  );
}

export default App;
