import React from "react"

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario">
                <div className="campo">
                    <label>Definir presupuesto:</label>
                    <input 
                        className="nuevo-presupuesto"
                        type="text" 
                        placeholder="Añade un presupuesto"
                        value={presupuesto}
                        // Ahora necesitamos resolver lo siguiente: Al escribir un presupuesto, necesitamos que se actualice el estado, recordando que la funcion seteadora del estado es setPresupuesto, entonces: Todo lo que escribamos en el input, será lo que se agregará en la variable de setPresupuesto que está en el archivo App.jsx
                        onChange={ e => setPresupuesto(e.target.value) }
                    />
                </div>

                <input type="submit" value="Añadir" />
            </form>
        </div>
  )
}

export default NuevoPresupuesto
