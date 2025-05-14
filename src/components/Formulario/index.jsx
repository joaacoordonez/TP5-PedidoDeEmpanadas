import React, { useState } from "react";
import "./Formulario.css";
import Empanada from "../Empanada/index";

function Formulario() {
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

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPedido((prevPedido) => {
      return {
        ...prevPedido,
        [name]: value,
      };
    });
  };

  const agregarEmpanada = () => {
    setPedido((prevPedido) => ({
      ...prevPedido,
      gustos: [
        ...prevPedido.gustos,
        {
          nombreGusto: "",
          cantidad: 0,
        },
      ],
    }));
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
      </form>
    </>
  );
}

export default Formulario;
