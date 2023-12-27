import { useState } from "react";
import "./index.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import AboutPage from "./Routes/About";
import Products from "./Routes/Products";
import Cart from "./Routes/Cart";
import Details from "./Routes/Details";
import Authentication from "./Routes/Authentication";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          }
        >
          <Route
            index
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />

          <Route element={<AboutPage isDarkMode={isDarkMode} />} path="about" />

          <Route
            element={<Products isDarkMode={isDarkMode} />}
            path="products"
          />
          <Route path="auth" element={<Authentication />}></Route>

          <Route element={<Cart isDarkMode={isDarkMode} />} path="cart" />
          <Route
            element={<Details isDarkMode={isDarkMode} />}
            path="productDetails"
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
