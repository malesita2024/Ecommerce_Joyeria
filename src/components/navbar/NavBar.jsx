import { Dropdown, Space } from "antd";
import "./NavBar.css";
import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <Link to="/categoria/aretes">
        Aretes
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/categoria/pulseras">
        Pulseras
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to="/categoria/collares">
        Collares
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link to="/categoria/anillos">
        Anillos
      </Link>
    ),
  },
];

const NavBar = () => {

  return (
    <nav>
      <div className="div_logo">
      <Link to="/"><img src="logo_joyeria.png" /></Link>
      </div>
      {/* <h3>M@GA Ecommerce</h3> */}
      <ul className="menu">
        <li><Link className="link" to="/">Inicio</Link></li>
        <li><Link className="link" to="/nosotros">Nosotros</Link></li>
        <li>
          <Space direction="vertical">
          <Space wrap>
            <Dropdown menu={{ items }} placement="Categorias" >
              <Link className="link">Categorias</Link>
            </Dropdown>
          </Space>
        </Space>
        </li>
        <li><Link className="link" to="/contacto">Contacto</Link></li>
        <li><CardWidget /></li>
      </ul>
    </nav>
  );
};

export default NavBar;
