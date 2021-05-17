import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { renderField} from "../Utils/renderField/renderField"
import { renderFilePicker,  renderDayPicker, AsyncSelectField} from "../Utils/renderField/renderField";

class Formulario extends Component{
    
    render(){
        const {handleSubmit, crear, obtenerEstudiante, setArchivo} = this.props
        const ver = window.location.href.includes("ver")
        console.log("estudiante: ", obtenerEstudiante)
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Estudiante</label>
                    <Field
                        name="estudiante"
                        component={AsyncSelectField}
                        loadOptions={obtenerEstudiante}
                        isClearable
                    />

                    <Field
                        name="tarea"
                        component={"input"}
                        type="hidden"
                       
                    />

                    <br /><br />
                    <Field
                        name="estudiante"
                        component={"input"}
                        type="hidden"
                       
                    />

                    <br /><br />
                    <label>
                            Fecha de entrega
                    </label>
                    <Field
                            name="fecha_entrega"
                            component={renderDayPicker}
                    />
                    <br /><br />
                   
                    <br /><br />
                    <label>Archivo</label>
                    <Field

                            setFile={setArchivo}
                            name="archivo"
                            component={renderFilePicker}
                        />
                    <label>Texto</label>
                    <Field
                        name="texto"
                        component={renderField}
                        type="text"
                    />
                    <label>Puntuacion</label>
                    <Field
                        name="puntuacion"
                        component={renderField}
                        type="number"
                    />
                    <div className="d-flex flex-row justify-content-end mt-3">
                        <a 
                            className="btn btn-secondary btn-sm mr-2" 
                            href='/#/cursosEstudiante'
                        >
                            Cancelar
                        </a>
                        {!ver &&
                        <button className="btn btn-primary btn-sm mr-2">
                            {crear ? "Enviar Tarea" : "Enviar Tarea"}
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
        form: 'tareaEstudianteForm'
    }
)(Formulario)
