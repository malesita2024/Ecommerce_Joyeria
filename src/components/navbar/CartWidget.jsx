import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Badge } from "antd";
import "./NavBar.css";

const CardWidget = () => {
  return (
    <Badge count={1}>
      <Avatar shape="square" size="large">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      </Avatar>
    </Badge>
  );
};

export default CardWidget;
