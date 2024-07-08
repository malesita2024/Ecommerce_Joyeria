import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);

  const handleVaciarCarrito = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h2>Carrito</h2>
      <Space direction="vertical" size={16}>
        {carrito.map((prod) => (
          <Card
            key={prod.id}
            title={prod.nombre}
            style={{
              width: "90vw",
            }}
          >
            <div style={{ display: "flex" }}>
              <img style={{ width: 100, height: "auto" }} src={prod.img} />
              <div style={{ paddingLeft: 40 }}>
                <p>
                  <strong>Precio unitario:</strong> $ {prod.precio} USD
                </p>
                <p>
                  <strong>Cantidad:</strong> {prod.cantidad}
                </p>
                <h3>
                  <strong>Precio total:</strong>$ {prod.precio * prod.cantidad}{" "}
                  USD
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </Space>
      <h3>TOTAL: $ {precioTotal()} USD</h3>
      <button onClick={ handleVaciarCarrito }>Vaciar carrito</button>
      <br></br>
      <Link to="/checkout">Finalizar Compra</Link>
    
    </div>
  );
};

export default Carrito;
