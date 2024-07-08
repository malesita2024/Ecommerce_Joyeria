import { Card, InputNumber } from "antd";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";



const ItemDetail = ( item ) => {

  const {carrito, agregarAlCarrito } = useContext(CarritoContext)
  console.log('carrito from context---->', carrito)

  let cantidad = 1

  const onChange = (value) => {
    console.log("changed", value);
    cantidad = value
    return cantidad
  };

  return (
    <>
      {item && (
        <div>
          <h1>{item.prodDetail.nombre}</h1>
          <Card
            key={item.prodDetail.id}
            hoverable
            style={{
              width: "80%",
              objectFit: "cover",
              display: "flex",
            }}
            cover={<img src={item.prodDetail.img} alt={item.prodDetail.name} />}
          >
            <h3>
              <span>Precio:</span> {item.prodDetail.precio} USD
            </h3>
            <h3>
              <span>Stock:</span> {item.prodDetail.stock}
            </h3>
            <p>
              <span>Categoría:</span> {item.prodDetail.categoria}
            </p>
            <p>
              <span>Descripción:</span> {item.prodDetail.descripcion}
            </p>
            <InputNumber
              min={1}
              max={item.prodDetail.stock}
              defaultValue={1}
              onChange={onChange}
            />
            <br></br>
            <button onClick={()=>{ agregarAlCarrito(item, cantidad)}}>Agregar a carrito</button>
          </Card>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
