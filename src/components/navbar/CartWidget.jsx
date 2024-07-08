import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Badge } from "antd";
import "./NavBar.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { cantidadEnCarrito } = useContext(CarritoContext);

  return (
    <Badge count={cantidadEnCarrito()}>
      <Link to={"/carrito"}>
        <Avatar shape="square" size="large">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </Avatar>
      </Link>
    </Badge>
  );
};

export default CardWidget;
