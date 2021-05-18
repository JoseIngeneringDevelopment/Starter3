import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { toggleOpen, navToggle, logOut, user } = this.props;
        console.log('user',user)
        const rol = user.profile && user.profile.rol ? user.profile.rol.rol_name : "ninguno";
        console.log('rol',rol)
        return (
            <aside
                className={`main-sidebar px-0 col-12 col-md-3 col-lg-2 ${
                    toggleOpen ? '' : 'open'
                }`}
            >
                <div className="main-navbar">
                    <nav className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light">
                        <a href="#" className="w-100 mr-0 navbar-brand">
                            <div className="d-table m-auto">
                                <img
                                    id="main-logo"
                                    className="d-inline-block align-top mr-1"
                                    src={require('assets/img/logo.png')}
                                    alt="Logo"
                                />
                            </div>
                        </a>
                        <a
                            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
                            onClick={navToggle}
                        >
                            <i className="material-icons"></i>
                        </a>
                    </nav>
                </div>
                <div className="nav-wrapper">
                    <ul className="nav--no-borders flex-column nav">
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/reporteAdmin"
                                exact
                                className="nav-link "
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">edit</i>
                                </div>
                                <span>Home</span>
                            </NavLink>
                         </li>
                        }
                        {rol == "profesor" &&
                        <li className="nav-item">
                            <NavLink
                                to="/reporteProfesor"
                                exact
                                className="nav-link "
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">edit</i>
                                </div>
                                <span>Home</span>
                            </NavLink>
                         </li>
                         }
                         {rol == "student" &&
                        <li className="nav-item">
                            <NavLink
                                to="/reporteEstudiante"
                                exact
                                className="nav-link "
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">edit</i>
                                </div>
                                <span>Home</span>
                            </NavLink>
                         </li>
                         }
                        {/*<li className="nav-item">
                            <NavLink
                                to="/page2"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Basic components</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/grids"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Grids</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/notifications"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Notificaciones</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/tabs"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Tabs</span>
                            </NavLink>
                        </li> */}
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/profesions"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Profesiones</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/grados"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Grados</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/secciones"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Secciones</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/cursos"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Cursos</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/niveles"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Niveles</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/catedraticos"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Catedraticos</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/estudiantes"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Estudiantes</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "administrador" &&
                        <li className="nav-item">
                            <NavLink
                                to="/asignaciones"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Asignaciones</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "profesor" &&
                        <li className="nav-item">
                            <NavLink
                                to="/cursosProfesor"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Mis Cursos</span>
                            </NavLink>
                        </li>
                        }
                        {rol == "student" &&
                        <li className="nav-item">
                            <NavLink
                                to="/cursosEstudiante"
                                className="nav-link"
                                activeClassName={'active'}
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">
                                        vertical_split
                                    </i>
                                </div>
                                <span>Mis Cursos</span>
                            </NavLink>
                        </li>
                        }
                        <li className="nav-item">
                            <Link
                                to="/login"
                                onClick={logOut}
                                className="nav-link"
                            >
                                <div className="d-inline-block item-icon-wrapper">
                                    <i className="material-icons">lock</i>
                                </div>
                                <span>Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default SideBar;
