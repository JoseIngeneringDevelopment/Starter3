import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { renderField} from "../Utils/renderField/renderField"
import { AsyncSelectField } from "../Utils/renderField/renderField";

class Formulario extends Component{
    
    render(){
        const {handleSubmit, crear, obtenerCiclo, obtenerGrado, obtenerSeccion, obtenerCurso, obtenerCatedratico} = this.props
        const ver = window.location.href.includes("ver")
        console.log("ciclo: ", obtenerCiclo)
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ciclo</label>
                    <Field
                        name="ciclo"
                        component={AsyncSelectField}
                        loadOptions={obtenerCiclo}
                        isClearable
                    />
                    <br /><br />
                    <label>Grado</label>
                    <Field
                        name="grado"
                        component={AsyncSelectField}
                        loadOptions={obtenerGrado}
                        isClearable
                    />
                    <br /><br />
                    <label>Seccion</label>
                    <Field
                        name="seccion"
                        component={AsyncSelectField}
                        loadOptions={obtenerSeccion}
                        isClearable
                    />
                    <br /><br />
                    <label>Curso</label>
                    <Field
                        name="curso"
                        component={AsyncSelectField}
                        loadOptions={obtenerCurso}
                        isClearable
                    />
                    <br /><br />
                    <label>Catedratico</label>
                    <Field
                        name="catedratico"
                        component={AsyncSelectField}
                        loadOptions={obtenerCatedratico}
                        isClearable
                    />
                    <br /><br />
                    <label>Descripcion</label>
                    <Field
                        name="descripcion"
                        component={renderField}
                        type="text"
                    />
                    <br /><br />
                    <div className="d-flex flex-row justify-content-end mt-3">
                        <a 
                            className="btn btn-secondary btn-sm mr-2" 
                            href='/#/asignaciones'
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
        form: 'AsignacionForm'
    }
)(Formulario)
