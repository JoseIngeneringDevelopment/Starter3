import React, { Component } from 'react';

class reporteEstudiante extends Component {


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
                        Reporte de Estudiante
                    </span>
                    <h3 className="page-title">Reporte Estudiante</h3>
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
                                    <td>{registro.asignacion.curso.curso_name}</td>
                                    <td>{registro.asignacion.grado.nombre}</td>
                                    <td>{registro.asignacion.seccion.seccion_name}</td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                    <br /><br />
                    <h4>Tareas Pendientes</h4>
                    <table className="table table-bordered">

                        <tread>
                            <tr>
                                <th>Curso</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Fecha que la entrego</th>
                            </tr>
                        
                        </tread>
                        <tbody>
                            {dataTareas.results.map((registro, i)=>(
                                <tr key = {i}>
                                    <td>{registro.asignacion.curso.curso_name}</td>
                                    <td>{registro.nombre}</td>
                                    <td>{registro.descripcion}</td>
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

export default reporteEstudiante;