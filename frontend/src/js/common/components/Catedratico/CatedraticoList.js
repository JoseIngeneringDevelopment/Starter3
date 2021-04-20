import React, {Component} from "react";
import Grid from "../Utils/Grid";
import {standardActions} from "../Utils/Grid/StandardActions";


class CatedraticoList extends Component{
    componentWillMount = () => {
        const {listar} = this.props;
        listar();
    }
    render(){
        const { data, loader, eliminar}= this.props;
        console.log("data",data)
        return(
            <div>
                
                <h3> Catedraticos </h3>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-primary btn-sm"
                        href='/#/catedraticos/create'
                    >
                        Agregar catedratico
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
                            Nombre del Catedratico
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="profile"
                            dataSort
                            dataFormat={(cell,row)=>{
                                return cell.last_name;
                            }}
                        >
                            Apellidos del Catedratico
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="profesion"
                            dataSort
                            dataFormat={(cell)=>{
                                return cell.profesion_name;
                            }}
                        >
                            Profesion
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={
                                standardActions({
                                    editar: 'catedraticos',
                                    ver: 'catedraticos/ver',
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

export default CatedraticoList;