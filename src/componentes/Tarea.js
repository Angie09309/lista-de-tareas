import React from "react";
import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ texto, completada }) => {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-contendedor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
};

export default Tarea;
