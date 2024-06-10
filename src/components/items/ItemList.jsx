import { Card } from "antd";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {

  const { Meta } = Card;



  return (
    <>
      <div>
        {productos && (
          <div className="cont-itemsList">
            {productos.map((prod) => {
              return (
                <>
                <Link to={`/item/${prod.id}`}>
                <Card
                      key={prod.id}
                      hoverable
                      style={{
                          width: 240,
                          objectFit: "cover",
                          marginTop: 30,
                          marginBottom: 20,
                      }}
                      cover={<img
                          className="img-card-Itemlist"
                          src={prod.img}
                          alt={prod.name} />}
                  >
                      <Meta title={prod.nombre} description="Ver detalle" />
                  </Card>
                  </Link>
                  </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default ItemList;
