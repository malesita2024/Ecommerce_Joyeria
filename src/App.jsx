/* import './App.css' */
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting= 'Bievenidos a M@ga Ecommerce' />
    </>
  );
}

export default App;
