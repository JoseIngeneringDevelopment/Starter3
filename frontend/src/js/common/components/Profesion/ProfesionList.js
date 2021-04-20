import React, {Component} from "react";
import Grid from "../Utils/Grid";
import {standardActions} from "../Utils/Grid/StandardActions";


class ProfesionList extends Component{
    componentWillMount = () => {
        const {listar} = this.props;
        listar();
    }
    render(){
        const { data, loader, eliminar}= this.props;
        console.log("data",data)
        return(
            <div>
                
                <h3> Profesiones </h3>
                <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-primary btn-sm"
                        href='/#/profesions/create'
                    >
                        Agregar profesión
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
                            dataField="profesion_name"
                            dataSort
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
                                    editar: 'profesions',
                                    ver: 'profesions/ver',
                                    //eliminar: () => {},
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

export default ProfesionList;