import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './acciones.css';
import Swal from 'sweetalert2';


class Acciones extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { id, ver, enviarTarea} = this.props;

        return (
            <div className="d-flex justify-content-center">
                    
                    {enviarTarea !== undefined && (
                    <Link to={`/tareasestudiante/create/${id}/`} className="px-2">
                        <a
                        className="btn btn-primary btn-sm"
                        href='/#/asignaciones/create'
                        >
                        Enviar Tarea
                        </a>
                    </Link>
                    )}
                    
                
            </div>
        );
    }
}
Acciones.propTypes = {};

export function enviarTarea(acciones) {
    return (cell, row) => {
        return <Acciones id={cell} {...acciones} />;
    };
}