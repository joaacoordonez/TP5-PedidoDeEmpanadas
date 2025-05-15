import './App.css'
import React, { useState } from "react";
import Formulario from './components/Formulario/'
import Listado from "./components/Listado/";

function App() {

  const [pedidos, setPedidos] = useState([]);
  // La variable nuevoPedido viene desde formulario a traves de el boton y del onclick de manera prop

  const agregarPedido = (nuevoPedido) => {
    setPedidos((prevPedido) => [...prevPedido, nuevoPedido]);
  };
  return (
    <>

    <h1>Pedido de empanadas</h1>
      <Formulario onAgregarPedido={agregarPedido}/>
      <Listado pedidos={pedidos} />
    </>
  )
}

export default App
