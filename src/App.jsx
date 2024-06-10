/* import './App.css' */
import ItemDetail from "./components/items/ItemDetail";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Nuestros favoritos de la semana" />} />
          <Route path='/categoria' element={<ItemListContainer greeting="Nuestros favoritos de la semana" />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer greeting="Nuestros favoritos de la semana" />} />
          <Route path='/item/:id' element={<ItemDetail />}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
