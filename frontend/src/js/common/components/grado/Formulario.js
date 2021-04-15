import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { renderField} from "../Utils/renderField/renderField"

class Formulario extends Component{
    
    render(){
        const {handleSubmit, crear} = this.props

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del Grado</label>
                    <Field
                        name="nombre"
                        component={renderField}
                        type="text"
                    />
                    <label>Descripcion</label>
                    <Field
                        name="descripcion"
                        component={renderField}
                        type="text"
                    />
                    <div className="d-flex flex-row justify-content-end mt-3">
                        <a 
                            className="btn btn-secondary btn-sm mr-2" 
                            href='/#/grados'
                        >
                            Cancelar
                        </a>
                        <button className="btn btn-primary btn-sm mr-2">
                            {crear ? "Registrar" : "Actualizar"}
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm(
    {
        form: 'GradoForm'
    }
)(Formulario)

