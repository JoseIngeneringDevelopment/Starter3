import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import PropTypes from 'prop-types';
import {standardActions} from "../Utils/Grid/StandardActions";






class TareaEstudiantelList extends Component{
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
                        href= {`/#/tareasEstudiante/create/${id}`}
                    >
                        Agregar tarea
                    </a>
                </div>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-secondary btn-sm"
                        href='/#/cursosEstudiante'
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
                            dataField="tarea"
                            dataSort
                            dataFormat={(cell,row)=>{
                                console.log("row: ", row)
                                return cell.nombre;
                            }}

                        >
                            Tarea
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="estudiante"
                            dataSort
                            dataFormat={(cell,row)=>{
                                console.log("row: ", cell)
                                return `${cell.profile.name} ${cell.profile.last_name}`;
                                
                            }}
                        >
                            Estudiante
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="fecha_entrega"
                            dataSort
                        >
                            Fecha de entrega
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="puntuacion"
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
                                standardActions({
                                    editar: '/tareasEstudiante',
                                    ver: 'tareasEstudiante/ver',

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

export default TareaEstudiantelList;