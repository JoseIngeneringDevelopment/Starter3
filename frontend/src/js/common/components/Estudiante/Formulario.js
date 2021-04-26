import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { renderField} from "../Utils/renderField/renderField"
import { AsyncSelectField } from "../Utils/renderField/renderField";

class Formulario extends Component{
    
    render(){
        const {handleSubmit, crear} = this.props
        const ver = window.location.href.includes("ver")

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del Estudiante</label>
                    <Field
                        name="name"
                        component={renderField}
                        type="text"
                    />
                    <br /><br />
                    <label>Apellido del Estudiante</label>
                    <Field
                        name="last_name"
                        component={renderField}
                        type="text"
                    />
                    <br /><br />
                    <label>Correo Electrónico</label>
                    <Field
                        name="email"
                        component={renderField}
                        type="email"
                    />
                    <br /><br />
                    <label>Username</label>
                    <Field
                        name="username"
                        component={renderField}
                        type="text"
                    />
                    <br /><br />
                    <label>Contraseña</label>
                    <Field
                        name="password"
                        component={renderField}
                        type="password"
                    />
                    <br /><br />
                    <label>Carnet</label>
                    <Field
                        name="carnet"
                        component={renderField}
                        type="text"
                    />
                    <br /><br />
                    <div className="d-flex flex-row justify-content-end mt-3">
                        <a 
                            className="btn btn-secondary btn-sm mr-2" 
                            href='/#/estudiantes'
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
        form: 'EstudianteForm'
    }
)(Formulario)
