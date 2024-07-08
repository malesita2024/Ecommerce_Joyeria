import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../components/items/ItemList";
import data from "../data/products.json";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("Nuestros favoritos de la semana");

  const categoria = useParams().categoria;

  // const miPromesa = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     data.length > 0
  //       ? resolve(data)
  //       : reject("Error: No existen productos");
  //   }, 200);
  // });

  useEffect(() => {

    const productosRef = collection(db, "productos")

    const productosRefFilter = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(productosRefFilter)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => {
            return ({ ...doc.data(), id: doc.id })
          })
        )
      })

    // miPromesa
    // .then((res)=>{
    //   if(categoria){
    //     setProductos(res.filter((prod)=>prod.categoria === categoria));
    //     setTitulo(categoria)
    //   }else{
    //     setProductos(res)
    //     setTitulo("Nuestros favoritos de la semana")
    //   }
    // })
    // .catch((err)=>console.log(err))

    // Prueba usando fetch
    // fetch("/data/products.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProductos(data);
    //   })
    //   .catch((e) => console.error(e));

  }, [categoria]);

  return (
    <>
      <h2>{titulo}</h2>
      {productos ? <ItemList productos={productos} /> : <div>Cargando...</div>}
    </>
  );
};

export default ItemListContainer;
