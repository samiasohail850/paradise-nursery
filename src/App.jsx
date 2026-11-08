import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Into Your Home</h2>
        <p>
          Discover beautiful indoor plants and create a
          fresh, peaceful and healthy environment.
        </p>

        <Link to="/plants" className="get-started">
          Get Started
        </Link>

        <Link to="/about" className="about-link">
          About Us
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;