import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item.prodDetail, cantidad };

    const nuevoCarrito = [...carrito];

    const prodEnCarrito = nuevoCarrito.find(
      (producto) => producto.id == itemAgregado.id
    );

    if (prodEnCarrito) {
      prodEnCarrito.cantidad = prodEnCarrito.cantidad + cantidad;
      setCarrito(nuevoCarrito);
      console.log("Está en el carrito--->", carrito);
    } else {
      setCarrito([...carrito, itemAgregado]);
      console.log("no hay nada en el carrito---->", carrito);
    }
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
