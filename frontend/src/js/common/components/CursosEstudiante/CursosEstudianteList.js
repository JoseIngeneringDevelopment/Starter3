import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import PropTypes from 'prop-types';
import cursosEstudiante from "../../../redux/modules/asignacionEstudiante/asignaciones";
import {verCursos} from "../CursosEstudiante/verCursos";





class CursosEstudianteList extends Component{
    static propTypes = {
        data: PropTypes.object.isRequired

    };
    componentWillMount = () => {
        const {listarCursos} = this.props;

        listarCursos();

    }
    render(){
        const { data, loader, verasignados}= this.props;
        console.log("data",data)
        const id_asignacion = this.props.data.results
        console.log("id_asignacion",id_asignacion)
        return(
            <div>
                
                <h3> Mis Cursos </h3>
                
                
                    <Grid
                        hover
                        striped
                        data={data}
                        loading={loader}
                        //onPageChange={onPageChange}
                        //onSortChange={onSortChange}
                    >
                        <TableHeaderColumn
                            dataField="curso"
                            dataSort
                            dataFormat={(cell,row)=>{
                                console.log("row: ", row)
                                return row.asignacion.curso.curso_name;
                                
                            }
                        }
                        >
                            Curso
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat= {
                                verCursos({
                                    verMaterial: 'material/ver',
                                    verTareas: 'tareas/ver'
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

export default CursosEstudianteList;