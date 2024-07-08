import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext"
import "./Checkout.css"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

useContext

const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);

    const [pedidoId, setPedidoId] = useState("")

    const [valores, setValores] = useState({
        nombre: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        comprar()
    }

    const comprar = () => {

        const pedido = {
            cliente: valores,
            productos: carrito,
            total: precioTotal()
        }

        console.log("enviando pedido", pedido)

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc)=>{
            setPedidoId(doc.id);
        })
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    if(pedidoId){
        return(
            <div>
                <h1>Muchas gracias por tu compra!!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
                {vaciarCarrito([])}
            </div>
        )

    }

    return (
        <div className="container">
            <h1>Checkout</h1>
            <h2>Finaliza tu compra</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={valores.nombre}
                    onChange={handleValores}
                    name="nombre"
                />

                <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={valores.email}
                    onChange={handleValores}
                    name="email"
                />
                <button type="submit">Comprar</button>
            </form>

        </div>
    )
}

export default Checkout;