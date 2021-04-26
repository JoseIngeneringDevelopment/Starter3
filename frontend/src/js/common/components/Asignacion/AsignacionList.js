import React, {Component} from "react";
import Grid from "../Utils/Grid";
import {standardActions} from "../Utils/Grid/StandardActions";


class AsignacionList extends Component{
    componentWillMount = () => {
        const {listar} = this.props;
        listar();
    }
    render(){
        const { data, loader, eliminar}= this.props;
        console.log("data",data)
        return(
            <div>
                
                <h3> Asignaciones </h3>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-primary btn-sm"
                        href='/#/asignaciones/create'
                    >
                        Agregar Asignacion
                    </a>
                </div>
                {data &&
                    <Grid
                        hover
                        striped
                        data={data}
                        loading={loader}
                        //onPageChange={onPageChange}
                        //onSortChange={onSortChange}
                    >
                        <TableHeaderColumn
                            dataField="ciclo"
                            dataSort
                            dataFormat={(cell,row)=>{
                                return cell.anio;
                            }}
                        >
                            Ciclo
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="grado"
                            dataSort
                            dataFormat={(cell,row)=>{
                                return cell.nombre;
                            }}
                        >
                            Grado
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="seccion"
                            dataSort
                            dataFormat={(cell)=>{
                                return cell.seccion_name;
                            }}
                        >
                            Seccion
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="curso"
                            dataSort
                            dataFormat={(cell)=>{
                                return cell.curso_name;
                            }}
                        >
                            Curso
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="catedratico"
                            dataSort
                            dataFormat={(cell,row)=>{
                                console.log("row: ", row)
                                return `${cell.profile.name} ${cell.profile.last_name}`;
                            }}
                        >
                            Catedratico
                        </TableHeaderColumn>
                        
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={
                                standardActions({
                                    editar: 'asignaciones',
                                    ver: 'asignaciones/ver',
                                    eliminar: eliminar
                            })}
                        >
                            Acciones
                        </TableHeaderColumn>
                    </Grid>
                }
            </div>
        );
    }
}

export default AsignacionList;