import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { renderField} from "../Utils/renderField/renderField"
import { AsyncSelectField } from "../Utils/renderField/renderField";

class FormularioEstudiantes extends Component{
    
    render(){
        const {handleSubmit, obtenerEstudiantes, crear} = this.props

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Estudiante</label>
                    <Field
                        name="estudiante"
                        component={AsyncSelectField}
                        loadOptions={obtenerEstudiantes}
                        isClearable
                    />
    
                    <div className="d-flex flex-row justify-content-end mt-3">
                        <button className="btn btn-primary btn-sm mr-2">
                            Asignar Estudiante
                            {crear}
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm(
    {
        form: 'AsignacioEstudiantesForm'
    }
)(FormularioEstudiantes)