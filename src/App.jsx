import { useState } from "react";
import "./index.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Products from "./Routes/Products";
import Cart from "./Routes/Cart";

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

          <Route element={<About isDarkMode={isDarkMode} />} path="about" />

          <Route
            element={<Products isDarkMode={isDarkMode} />}
            path="products"
          />

          <Route element={<Cart isDarkMode={isDarkMode} />} path="cart" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
