/* import './App.css' */
import NavBar from "./components/navbar/NavBar";
import Nosotros from "./components/nosotros/Nosotros";
import ItemListContainer from "./containers/ItemListContainer";
import Carrito from "./components/carrito/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  CartProvider } from "./context/CarritoContext";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Nuestros favoritos de la semana" />
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route
            path="/categoria"
            element={
              <ItemListContainer greeting="Nuestros favoritos de la semana" />
            }
          />
          <Route
            path="/categoria/:categoria"
            element={
              <ItemListContainer greeting="Nuestros favoritos de la semana" />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
