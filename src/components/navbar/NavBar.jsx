import { Button, Dropdown, Space } from "antd";
import "./NavBar.css";
import CardWidget from "./CartWidget";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" href="#">
        Tecnología
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" href="#">
        Ropa
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" href="#">
        Calzado
      </a>
    ),
  },
];

const NavBar = () => {

  return (
    <nav>
      <h3>M@GA Ecommerce</h3>
      <div className="menu">
        <Button type="link">Inicio</Button>
        <Button type="link">Acerca</Button>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown menu={{ items }} placement="Categorias" >
              <Button type="link">Categorias</Button>
            </Dropdown>
          </Space>
        </Space>
        <Button type="link">Contacto</Button>
        <CardWidget />
      </div>
    </nav>
  );
};

export default NavBar;
