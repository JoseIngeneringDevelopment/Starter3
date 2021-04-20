import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { renderField} from "../Utils/renderField/renderField"

class Formulario extends Component{
    
    render(){
        const {handleSubmit, crear} = this.props
        const ver = window.location.href.includes("ver")
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del Curso</label>
                    <Field
                        name="curso_name"
                        component={renderField}
                        type="text"
                    />
                    <label>Descripcion</label>
                    <Field
                        name="curso_descripcion"
                        component={renderField}
                        type="text"
                    />
                    <div className="d-flex flex-row justify-content-end mt-3">
                        <a 
                            className="btn btn-secondary btn-sm mr-2" 
                            href='/#/cursos'
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
        form: 'CursoForm'
    }
)(Formulario)

