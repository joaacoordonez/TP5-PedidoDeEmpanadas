import React, { useState } from "react";
import './Formulario.css';

function Formulario() {
    const [newPedido, setNewPedido] = useState({
        nombreEmpleado: '',
        sector: '',
        listaGustos: [],
        gustoActual: '',
        cantidadActual: ''
    });
    
    const gustosDisponibles = [
        "Carne",
        "Pollo",
        "Jamón y queso",
        "Humita",
        "Caprese",
        "Roquefort"
      ];
    const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPedido({
        ...newPedido,
        [name]: value,
    });


    const handleAgregarEmpanada = (e) => {
        e.preventDefault();

        if (!newPedido.gustoActual) return
        
        setNewPedido({
            ...newPedido,
            listaGustos: [...newPedido.listaGustos, { gusto: newPedido.gustoActual, cantidad: newPedido.cantidad }]
        })

            
        
    };
      
    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>Nombre Empleado</label>
        <input
            type="text"
            name="nombreEmpleado"
            placeholder="Nombre de Empleado"
            value={newPedido.nombreEmpleado}
            onChange={handleChange}
        />

        <label>Sector al que corresponde</label>
        <select name="sector" value={newPedido.sector} onChange={handleChange}>
            <option value="">Seleccione un sector</option>
            <option value="Sistemas">Sistemas</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Ventas">Ventas</option>
            <option value="RRHH">RRHH</option>
            <option value="Soporte">Soporte</option>
            <option value="Depósito">Depósito</option>
        </select>

        <label>Gusto de empanada</label>
        <select
            name="gustoActual"
            value={newPedido.gustoActual}
            onChange={handleChange}
        >
            <option value="">Seleccione un gusto</option>
            {gustosDisponibles.map((gusto, index) => (
            <option key={index} value={gusto}>{gusto}</option>
            ))}
        </select>

        <button type="button" onClick={handleAgregarEmpanada}>
            Agregar otra empanada
        </button>
              </form>
        </>
        
    )
}

}
