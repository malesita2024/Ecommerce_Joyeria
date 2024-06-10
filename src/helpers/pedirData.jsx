import data from "/public/data/products.json";

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = data.find((prod) => prod.id === id);
      item ? resolve(item) : reject({ error: "No se encontró el producto" });
    }, 500);

    // if (item){
    //     resolve(item)
    // }else{
    //     reject({
    //         error:"No se encontró el producto"
    //     })
    // }
  });
};
