import React, { Component } from 'react';

class ReporteAdmin extends Component {


    componentWillMount = () => {
        const {listarUsuarios} = this.props;
        const {listarNiveles} = this.props;
        const {listarciclo} = this.props;

        listarUsuarios();
        listarNiveles();
        listarciclo();

    }
    render() {
        const { data , dataNivel,dataCiclo}= this.props;

        return (
            <div className="page-header py-4 no-gutters row">
                <div className="text-sm-left mb-3 text-center text-md-left mb-sm-0 col-12 col-sm-4">
                    <span className="text-uppercase page-subtitle">
                        Reporte de Administrador
                    </span>
                    <h3 className="page-title">Reporte</h3>
                </div>
                <br /><br />
                <React.Fragment>
                    <br /><br />
                    
                    <h4>Total de usuarios registrados en el sistema</h4>
                    <table className="table table-bordered">

                        <tread>
                            <tr>
                                <th>Total Usuarios</th>
                                <td>{data.total_usuarios.usuarios}</td>
                            </tr>
                            <tr>
                                <th>Total Catedraticos</th>
                                <td>{data.total_usuarios.catedraticos}</td>
                            </tr>
                            <tr>
                                <th>Total Estudiantes</th>
                                <td>{data.total_usuarios.estudiantes}</td>
                            </tr>
                        </tread>

                    </table>
                    <h4>Ciclo Escolar</h4>
                    <table className="table table-bordered">
                    <tread>
                            <tr>
                                <th>Año  </th>
  
                            </tr>
                        </tread>
                        <tbody>
                            {dataCiclo.results.map((registro, i)=>(
                                <tr key = {i}>
                                    <td>{registro.anio}</td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                    <br /><br />
                    <h4>Niveles</h4>
                    <table className="table table-bordered">

                        <tread>
                            <tr>
                                <th>Nivel</th>
  
                            </tr>
                        </tread>
                        <tbody>
                            {dataNivel.results.map((registro, i)=>(
                                <tr key = {i}>
                                    <td>{registro.nivel_name}</td>
                                </tr>
                            ))

                            }
                        </tbody>

                    </table>
                    <h4>Grados</h4>
                    <table className="table table-bordered">

                        <tread>
                            <tr>
                                <th>Grados</th>
                                <td>{data.total_usuarios.grados}</td>
                            </tr>
                        </tread>

                    </table>
                    <br /><br />
                    <h4>Secciones</h4>
                    <table className="table table-bordered">

                        <tread>
                            <tr>
                                <th>Secciones</th>
                                <td>{data.total_usuarios.secciones}</td>
                            </tr>
                        </tread>

                    </table>
                </React.Fragment>
            </div>
        );
    }
}

export default ReporteAdmin;