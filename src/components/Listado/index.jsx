import React from "react";

function Listado({ pedidos }) {
  const totalPorGusto = pedidos.reduce((acumulador, pedido) => {
    pedido.gustos.forEach(({ nombreGusto, cantidad }) => { // recorremos el listado de pedido y de los gustos adentro
    
      if (!acumulador[nombreGusto]) /* chequea si ese gusto ya esta en el listado*/ {
        acumulador[nombreGusto] = 0; /* Inicia el valor de ese gusto */
      }
      acumulador[nombreGusto] += cantidad; /* Si ya existe se le suma la cantidad*/
    });
    return acumulador;
  }, {} /*Inicia el valor del acumulador*/);


  const gustosArray = [];
  for (let gusto in totalPorGusto) {
    gustosArray.push({ gusto, cantidad: totalPorGusto[gusto] });
  }

  return (
    <div>
      <h2>Total de empanadas por gusto</h2>
      <ul>
            {gustosArray.map((i, index) => (
            <li key={index}>
                {i.gusto}: {i.cantidad}
            </li>
            ))}
      </ul>

      <h2>Pedidos por persona</h2>
      {pedidos.map((pedido, index) => (
        <div key={index}>
          <strong>{pedido.nombreEmpleado} ({pedido.sector})</strong>
          <ul>
            {pedido.gustos.map((gusto, i) => (
              <li key={i}>
                {gusto.nombreGusto}: {gusto.cantidad}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Listado;
