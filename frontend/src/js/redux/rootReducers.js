import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import notificaciones from './modules/notificaciones/notificaciones';
import profesion from "./modules/profesion/profesion";
import grado from "./modules/grado/grado";
import seccion from "./modules/seccion/seccion"
import curso from "./modules/curso/curso"
import nivel from "./modules/nivel/nivel"
import catedratico from "./modules/catedratico/catedratico"
import estudiante from "./modules/estudiante/estudiante"
import asignacion from "./modules/asignacion/asignacion"
import cursosProfesor from "./modules/cursosProfesor/cursosProfesor"
import asignaciones from "./modules/asignacionEstudiante/asignaciones"
import material from "./modules/material/material"
import tarea from "./modules/tarea/tarea"

export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    profesion,
    grado,
    seccion,
    curso,
    nivel,
    catedratico,
    estudiante,
    asignacion,
    cursosProfesor,
    asignaciones,
    material,
    tarea,
    routing,
    notificaciones,
});
