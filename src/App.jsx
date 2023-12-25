import { useState } from "react";
import "./index.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import AboutPage from "./Routes/About";
import Products from "./Routes/Products";
import Cart from "./Routes/Cart";
import SignRoute from "./Routes/SignRoute";
import SignUpRoute from "./Routes/SignUpRoute";

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

          <Route element={<Cart isDarkMode={isDarkMode} />} path="cart" />
        </Route>
        <Route path="/sign-in" element={<SignRoute />}></Route>
        <Route path="/sign-up" element={<SignUpRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
