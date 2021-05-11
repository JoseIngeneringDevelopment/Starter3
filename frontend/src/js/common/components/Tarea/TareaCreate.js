import React, {Component} from "react";
import Formulario from './Formulario';

class TareaCreate extends Component{
    state={
        creacion: true,
        archivo: null,
    }

    setArchivo = (archivo) =>{
        this.setState({archivo: archivo})
    }

    create = (data) => {
        const { crear } = this.props;
        crear({ ...data, archivo: null }, [
            { file: this.state.archivo, name: 'archivo' },
        ]);
    };

    componentWillMount = () =>{
        const {leer, match} = this.props;
        const id = match.params.id;

        if(id){
            this.setState({creacion: false});
            leer(id);
        }
    }

    actualizar = (data) => {
        const {editar} = this.props;
        const id = data.id;
        editar(id,data);
    }

    render(){
        console.log("props:",this.props)
        const {crear, eliminar, obtenerAsignacion} = this.props;
        const {creacion} = this.state;
        const fun = creacion ? this.crate : this.actualizar;
        const id = this.props.match.params.id_asignacion;
        console.log('archivo:',this.state.archivo)
        return(
            <React.Fragment>
                <h3>Nuevo Registro</h3>
                <Formulario
                    initialValues={{asignacion: id}}
                    setArchivo = {this.setArchivo}
                    obtenerAsignacion = {obtenerAsignacion}
                    crear={creacion}
                    eliminar = {eliminar}
                    onSubmit = {this.create}
                />
            </React.Fragment>
        );
    }
}

export default TareaCreate;