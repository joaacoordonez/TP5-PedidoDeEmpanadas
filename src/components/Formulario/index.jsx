import React, { useState } from "react";
import "./Formulario.css";
import Empanada from "../Empanada/index";

function Formulario({onAgregarPedido}) {
  const [pedido, setPedido] = useState({
    nombreEmpleado: "",
    sector: "",
    gustos: [
      {
        nombreGusto: "",
        cantidad: 0,
      },
    ],
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      setPedido((prevPedido) => {
        const nuevosGustos = [...prevPedido.gustos];
        if (name === "cantidadEmpanadas") {
          nuevosGustos[index].cantidad = value;
        } else if (name === "nombreGusto") {
          nuevosGustos[index].nombreGusto = value;
        }
        return { ...prevPedido, gustos: nuevosGustos };
      });
    } else {
      setPedido({
        ...pedido,
        [name]: value,
      });
    }
  };

  const agregarEmpanada = () => {
    setPedido((prevPedido) => ({
      ...prevPedido,
      gustos: [
        ...prevPedido.gustos,
        { nombreGusto: "", cantidad: 0 },
      ],
    }));
  };

  const handleSubmit = (onAgregarPedido) => {
    onAgregarPedido(pedido); // Enviar el pedido al componente padre
    setPedido({
      nombreEmpleado: "",
      sector: "",
      gustos: [{ nombreGusto: "", cantidad: 0 }],
    }); // Resetear el formulario
  };

  

  const gustosDisponibles = [
    "Carne",
    "Pollo",
    "Jamón y queso",
    "Humita",
    "Caprese",
    "Roquefort",
  ];

  const sectorDisponibles = [
    "Sistemas",
    "Finanzas",
    "Ventas",
    "RRHH",
    "Soporte",
    "Deposito",
  ];

  return (
    <>
      <form>
        <label>Nombre Empleado</label>
        <input
          type="text"
          name="nombreEmpleado"
          placeholder="Nombre de Empleado"
          value={pedido.nombreEmpleado}
          onChange={handleChange}
        />

        <label>Sector al que corresponde</label>
        <select 
            name="sector" 
            value={pedido.sector} 
            onChange={handleChange}>
            <option value="">Seleccione un sector</option>
            {sectorDisponibles.map((sector, i) => (
                <option key={i} value={sector}>
                {sector}
                </option>
            ))}
        </select>

        {pedido.gustos.map((gusto, index) => (
          <Empanada
            key={index}
            index={index}
            gusto={gusto}
            handleChange={handleChange}
            gustosDisponibles={gustosDisponibles}
          />
        ))}

        <button type="button" onClick={agregarEmpanada}>
          Agregar otra empanada
        </button>
    
        <button type="button" onClick={() => handleSubmit(onAgregarPedido)}>
          Enviar pedido
        </button>
      </form>
    </>
  );
}
export default Formulario;