import React, {Component} from "react";
import Grid from "../Utils/Grid";
import {standardActions} from "../Utils/Grid/StandardActions";


class NivelList extends Component{
    componentWillMount = () => {
        const {listar} = this.props;
        listar();
    }
    render(){
        const { data, loader, eliminar}= this.props;
        console.log("data",data)
        return(
            <div>
                
                <h3> Niveles </h3>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-primary btn-sm"
                        href='/#/niveles/create'
                    >
                        Agregar nivel
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
                            dataField="nivel_name"
                            dataSort
                        >
                            Nombre del Nivel
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="nivel_descipcion"
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
                                    editar: 'niveles',
                                    ver: 'niveles/ver',
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

export default NivelList;