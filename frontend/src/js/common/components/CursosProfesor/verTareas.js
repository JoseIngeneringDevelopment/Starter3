import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './acciones.css';
import Swal from 'sweetalert2';

class Acciones extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { id, verTareas} = this.props;

        return (
            <div className="d-flex justify-content-center">
                
                    <Link to={`${verTareas}/${id}/`} className="px-2">
                        <a
                        className="btn btn-primary btn-sm"
                        href='/#/asignaciones/create'
                        >
                        Ver Tareas
                        </a>
                    </Link>
                
                
            </div>
        );
    }
}
Acciones.propTypes = {};

export function verTareas(acciones) {
    return (cell, row) => {
        return <Acciones id={cell} {...acciones} />;
    };
}