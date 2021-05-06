import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import PropTypes from 'prop-types';
import { AsyncSelectField } from "../Utils/renderField/renderField";
import { Field, reduxForm } from "redux-form";
import FormularioEstudiantes from './FormularioEstudiantes';
import {standardActions} from "../Utils/Grid/StandardActions";




class AsignacionEstudianteList extends Component{
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
        const { data, loader, obtenerEstudiantes, eliminar, crear}= this.props;
        const id = this.props.match.params.id;
        console.log("estudiantes",data)
        return(
            <div>
                    <React.Fragment>
                        <h3>Nuevo Registro</h3>
                        <FormularioEstudiantes
                            initialValues={{asignacion:id}}
                            obtenerEstudiantes = {obtenerEstudiantes}
                            onSubmit = {crear}
                        />
                    </React.Fragment>
                
              
                    <h3> Estudiantes Asignados </h3>
                    <div className="d-flex flex-row justify-content-end mb-3">
                    <a
                        className="btn btn-secondary btn-sm"
                        href='/#/cursosProfesor'
                    >
                        Regresar a Mis Cursos
                    </a>
                    </div>
                    <br /><br />   
                    
                        <Grid
                            hover
                            striped
                            data={data}
                            loading={loader}
                            //onPageChange={onPageChange}
                            //onSortChange={onSortChange}
                        >
                            <TableHeaderColumn
                                dataField="estudiante"
                                dataSort
                                dataFormat={(cell,row)=>{
                                    console.log("row: ", row)
                                    return `${cell.profile.name} ${cell.profile.last_name}`;
                                    
                                }}
                            >
                                Estudiante
                            </TableHeaderColumn>
                            <TableHeaderColumn
                                isKey
                                dataField="id"
                                dataAlign="center"
                                dataSort
                                dataFormat={
                                    standardActions({
                                        editar: 'asignacionesEstudiante',
                                        ver: 'asignacionesEstudiante/ver',
                                        eliminar: eliminar
                                })}
                            >
                                Acciones
                            </TableHeaderColumn>
                        </Grid>
                    
               
            </div>
        );
    }
}

export default AsignacionEstudianteList;