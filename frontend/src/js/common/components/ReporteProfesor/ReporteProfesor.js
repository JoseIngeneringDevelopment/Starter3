import React, { Component } from 'react';

class reporteProfesor extends Component {


    componentWillMount = () => {
        const {listarCursos} = this.props;
        const {listarTareas} = this.props;


        listarCursos();
        listarTareas();


    }
    render() {
        const { data , dataCursos,dataTareas}= this.props;

        return (
            <div className="page-header py-4 no-gutters row">
                <div className="text-sm-left mb-3 text-center text-md-left mb-sm-0 col-12 col-sm-4">
                    <span className="text-uppercase page-subtitle">
                        Reporte de Profesor
                    </span>
                    <h3 className="page-title">Reporte Profesor</h3>
                </div>
                <br /><br />
                <React.Fragment>
                    <br /><br />
                    
                    
                    <h4>Mis Cursos</h4>
                    <table className="table table-bordered">
                    <tread>
                            <tr>
                                <th>Nombre del Curso</th>
  
                            </tr>
                        </tread>
                        <tbody>
                            {dataCursos.results.map((registro, i)=>(
                                <tr key = {i}>
                                    <td>{registro.curso.curso_name}</td>
                                    <td>{registro.grado.nombre}</td>
                                    <td>{registro.seccion.seccion_name}</td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                    <br /><br />
                    <h4>Tareas Pendientes de Calificar</h4>
                    <table className="table table-bordered">

                        <tread>
                            <tr>
                                <th>Estudiante</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Fecha que la entrego</th>
                            </tr>
                        
                        </tread>
                        <tbody>
                            {dataTareas.results.map((registro, i)=>(
                                <tr key = {i}>
                                    <td>{`${registro.estudiante.profile.name} ${registro.estudiante.profile.last_name}`}</td>
                                    <td>{registro.tarea.nombre}</td>
                                    <td>{registro.tarea.descripcion}</td>
                                    <td>{registro.fecha_entrega}</td>

                                </tr>
                            ))

                            }
                        </tbody>

                    </table>
                    
                </React.Fragment>
            </div>
        );
    }
}

export default reporteProfesor;