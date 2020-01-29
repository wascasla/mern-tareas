import React, {useState} from 'react';

const FormTarea = () => {

    const [tarea, guardarTarea] = useState('')
    

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        placeholder="Nombre Tarea..."
                        className="input-text"
                        name="nombre"

                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;