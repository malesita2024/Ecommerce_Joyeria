import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Item = (prod) => {

  return (
    <>
      <Link to={`/item/${prod.producto.id}`}>
        <Card
          key={prod.producto.id}
          hoverable
          style={{
            width: 240,
            objectFit: "cover",
            marginTop: 30,
            marginBottom: 20,
          }}
          cover={
            <img className="img-card-Itemlist" src={prod.producto.img} alt={prod.producto.name} />
          }
        >
          <Meta title={prod.producto.nombre} description="Ver detalle" />
        </Card>
      </Link>
    </>
  );
};

export default Item;
