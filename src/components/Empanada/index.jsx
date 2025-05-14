import React from "react";

function Empanada({ gusto, index, handleChange, gustosDisponibles }) {
  return (
    <>
      <label>Gusto de empanada: </label>
      <select
        name="nombreGusto"
        value={gusto.nombreGusto}
        onChange={(e) => handleChange(e, index)}
      >
        <option value="">Seleccione un gusto</option>
        {gustosDisponibles.map((gusto, i) => (
          <option key={i} value={gusto}>
            {gusto}
          </option>
        ))}
      </select>

      <label>Ingrese la cantidad</label>
      <input
        type="number"
        name="cantidadEmpanadas"
        placeholder="Cantidad de empanadas"
        value={gusto.cantidad}
        onChange={(e) => handleChange(e, index)}
      />
    </>
  );
}

export default Empanada;

