import { useEffect, useState } from "react";
//import data from "./../data/products.json"
import { useParams } from "react-router-dom";
import ItemDetail from "../components/items/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const id = useParams().id;

  // const miPromesa = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const item = data.find((prod) => prod.id === id);
  //     item ? resolve(item) : reject({ error: "No se encontró el producto" });
  //   }, 200);
  // });

  useEffect(() => {

    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((res) => {
        setItem({...res.data(), id: res.id})
      })

    // miPromesa
    // .then((res) => {
    //   setItem(res)
    //   // console.log('promesa detail ---->', res)
    // })
    // .catch((err) => {
    //   console.log(err)
    // });
  }, [id]);

  return (
    <>
      {item && <ItemDetail key={item.id} prodDetail={item} />}
    </>
  );
}

export default ItemDetailContainer;