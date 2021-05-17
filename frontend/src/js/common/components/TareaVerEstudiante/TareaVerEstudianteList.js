import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import PropTypes from 'prop-types';
import {standardActions} from "../Utils/Grid/StandardActions";
import {enviarTarea} from "../TareaVerEstudiante/enviarTarea"






class TarealVerEstudianteList extends Component{
    static propTypes = {
        data: PropTypes.object.isRequired

    };
    componentWillMount = () => {
        const {listar} = this.props;

        const id = this.props.match.params.id;
        console.log('id',id)
        console.log('props', this.props)
        listar(1,id);
   

    }
    render(){
        const { data, loader}= this.props;
        const id = this.props.match.params.id;
        console.log("data",data)
        return(
            <div>
                
                <h3> Tareas </h3>

                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-primary btn-sm"
                        href= {`/#/tareas/create/${id}`}
                    >
                        Agregar tarea
                    </a>
                </div>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-secondary btn-sm"
                        href='/#/cursosProfesor'
                    >
                        Regresar a Mis Cursos
                    </a>
                </div>
                
                    <Grid
                        hover
                        striped
                        data={data}
                        loading={loader}
                        //onPageChange={onPageChange}
                        //onSortChange={onSortChange}
                    >
                        <TableHeaderColumn
                            dataField="nombre"
                            dataSort

                        >
                            Nombre
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="descripcion"
                            dataSort
                        >
                            Descripcion
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="fecha_entrega"
                            dataSort
                        >
                            Fecha de entrega
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="nota"
                            dataSort
                        >
                            Nota
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={
                                enviarTarea({
                                    enviarTarea: ''
                                })
                                
                        
                        }
                           
                            
                        >
                            Acciones
                        </TableHeaderColumn>

                    </Grid>
                    
                
            </div>
        );
    }
}

export default TarealVerEstudianteList;