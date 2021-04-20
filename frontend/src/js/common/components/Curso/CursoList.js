import React, {Component} from "react";
import Grid from "../Utils/Grid";
import {standardActions} from "../Utils/Grid/StandardActions";


class CursoList extends Component{
    componentWillMount = () => {
        const {listar} = this.props;
        listar();
    }
    render(){
        const { data, loader, eliminar}= this.props;
        console.log("data",data)
        return(
            <div>
                
                <h3> Cursos </h3>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-primary btn-sm"
                        href='/#/cursos/create'
                    >
                        Agregar curso
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
                            dataField="curso_name"
                            dataSort
                        >
                            Nombre del Curso
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="curso_descripcion"
                            dataSort
                        >
                            Descripcion
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={
                                standardActions({
                                    editar: 'cursos',
                                    ver: 'cursos/ver',
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

export default CursoList;