import { useEffect, useState } from "react";
import data from "../../data/products.json";
import { Card , InputNumber } from "antd";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [item, setItem] = useState(null);

  const id = Number(useParams().id);

  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = data.find((prod) => prod.id === id);
      item ? resolve(item) : reject({ error: "No se encontró el producto" });
    }, 200);
  });

  console.log("promesa--->", miPromesa)

  useEffect(() => {
    miPromesa
    .then((res) => {
      console.log("res Promesa--->",res)
      setItem(res)
    })
    .catch((err) => {
      console.log(err)
    });
  }, []);

  const onChange = (value) => {
    console.log('changed', value);
  };

  return (
    <>
    {item &&
    <div>
      
      <h1>{item.nombre}</h1>
      <Card
        key={item.id}
        hoverable
        style={{
          width: "80%",
          objectFit: "cover",
          display: "flex"
        }}
        cover={
          <img
            src={item.img}
            alt={item.name}
          />
        }
      >
        <h3><span>Precio:</span> {item.precio}</h3>
        <h3><span>Stock:</span> {item.stock}</h3>
        <p><span>Categoría:</span> {item.categoria}</p>
        <p><span>Descripción:</span> {item.descripcion}</p>     
        <InputNumber min={1} max={item.stock} defaultValue={3} onChange={onChange} />
        <br></br>
        <button>Agregar a carrito</button>
      </Card>
      
      </div>
      }
    </>
  );
};
export default ItemDetail;
