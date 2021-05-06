import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './acciones.css';
import Swal from 'sweetalert2';

class Acciones extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { id, ver, verMaterial, verTareas} = this.props;

        return (
            <div className="d-flex justify-content-center">
                    {ver !== undefined && (
                    <Link to={`${ver}/${id}/`} className="px-2">
                        <a
                        className="btn btn-primary btn-sm"
                        href='/#/asignaciones/create'
                        >
                        Ver Asignados
                        </a>
                    </Link>
                    )}
                    {verMaterial !== undefined && (
                    <Link to={`${verMaterial}/${id}/`} className="px-2">
                        <a
                        className="btn btn-primary btn-sm"
                        href='/#/asignaciones/create'
                        >
                        Ver Material
                        </a>
                    </Link>
                    )}
                    {verTareas !== undefined && (
                    <Link to={`${verTareas}/${id}/`} className="px-2">
                        <a
                        className="btn btn-primary btn-sm"
                        href='/#/asignaciones/create'
                        >
                        Ver Tareas
                        </a>
                    </Link>
                    )}
                
            </div>
        );
    }
}
Acciones.propTypes = {};

export function verEstudiantes(acciones) {
    return (cell, row) => {
        return <Acciones id={cell} {...acciones} />;
    };
}