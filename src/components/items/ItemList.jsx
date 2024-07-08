//import { Card } from "antd";
//import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <div>
        {productos && (
          <div className="cont-itemsList">
            {productos.map((prod) => {
              return (
                <>
                  <Item key={prod.id} producto={prod} />
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
