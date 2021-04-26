import React, {Component} from "react";
import Grid from "../Utils/Grid";
import {standardActions} from "../Utils/Grid/StandardActions";


class EstudianteList extends Component{
    componentWillMount = () => {
        const {listar} = this.props;
        listar();
    }
    render(){
        const { data, loader, eliminar}= this.props;
        console.log("data",data)
        return(
            <div>
                
                <h3> Estudiantes </h3>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-primary btn-sm"
                        href='/#/estudiantes/create'
                    >
                        Agregar estudiante
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
                            dataField="profile"
                            dataSort
                            dataFormat={(cell,row)=>{
                                return cell.name;
                            }}
                        >
                            Nombre del Estudiante
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="profile"
                            dataSort
                            dataFormat={(cell,row)=>{
                                return cell.last_name;
                            }}
                        >
                            Apellidos del Estudiante
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="carnet"
                            dataSort
                        >
                            Carnet
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={
                                standardActions({
                                    editar: 'estudiantes',
                                    ver: 'estudiantes/ver',
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

export default EstudianteList;