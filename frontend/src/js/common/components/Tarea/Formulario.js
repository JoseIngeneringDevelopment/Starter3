import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { renderField} from "../Utils/renderField/renderField"
import { AsyncSelectField , renderFilePicker, renderDatePicker, renderDayPicker} from "../Utils/renderField/renderField";

class Formulario extends Component{
    
    render(){
        const {handleSubmit, crear, obtenerAsignacion, setArchivo} = this.props
        const ver = window.location.href.includes("ver")
        console.log("asignacion: ", obtenerAsignacion)
        return(
            <form onSubmit={handleSubmit}>
                <div>
            

                    <Field
                        name="asignacion"
                        component={"input"}
                        type="hidden"
                       
                    />

                    <br /><br />
                    <label>Nombre</label>
                    <Field
                        name="nombre"
                        component={renderField}
                        type="text"
                    />
                    <br /><br />
                    <label>Descripcion</label>
                    <Field
                        name="descripcion"
                        component={renderField}
                        type="text"
                    />
                    <br /><br />
                    <label>Archivo</label>
                    <Field

                            setFile={setArchivo}
                            name="archivo"
                            component={renderFilePicker}
                        />
                    <label>
                            Fecha de entrega
                    </label>
                    <Field
                            name="fecha_entrega"
                            component={renderDayPicker}
                    />
                    <label>Nota</label>
                    <Field
                        name="nota"
                        component={renderField}
                        type="number"
                    />
                    <div className="d-flex flex-row justify-content-end mt-3">
                        <a 
                            className="btn btn-secondary btn-sm mr-2" 
                            href='/#/cursosProfesor'
                        >
                            Cancelar
                        </a>
                        {!ver &&
                        <button className="btn btn-primary btn-sm mr-2">
                            {crear ? "Registrar" : "Actualizar"}
                        </button>
                        }
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm(
    {
        form: 'tareaForm'
    }
)(Formulario)
