import React, {Component} from "react";
import Formulario from './Formulario';

class SeccionCreate extends Component{
    state={
        creacion: true,
    }

    componentWillMount = () =>{
        const {leer, match} = this.props;
        const id = match.params.id;

        if(id){
            this.setState({creacion: false});
            leer(id);
        }
    }
    render(){
        console.log("props:",this.props)
        const {crear, editar} = this.props;
        const {creacion} = this.state;
        const fun = creacion ? crear : editar;

        return(
            <React.Fragment>
                <h3>Nuevo Registro</h3>
                <Formulario
                    crear={creacion}
                    onSubmit = {fun}
                />
            </React.Fragment>
        );
    }
}

export default SeccionCreate;