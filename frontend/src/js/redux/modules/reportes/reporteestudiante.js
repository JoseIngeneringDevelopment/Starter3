import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { api } from 'api';


const endpoint = "reporteProfesor";
const SET_PAGE_REPORTE_ADMIN = "SET_PAGE_REPORTE_ADMIN";
const SET_DATA_REPORTE_CURSOS = "SET_DATA_REPORTE_CURSOS";
const SET_DATA_REPORTE_TAREAS = "SET_DATA_REPORTE_TAREAS";
const SET_DATA_REPORTE_NIVEL = "SET_DATA_REPORTE_NIVEL";
const SET_LOADER_REPORTE_ADMIN = "SET_LOADER_REPORTE_ADMIN";




export const listarCursos = () => (dispatch, getStore) => {

    api.get('reporteEstudiante/ReporteCursosEstudiante/')
        .then((response) => {
            console.log('reporte cursos ', response)
            dispatch({type: SET_DATA_REPORTE_CURSOS, dataCursos: response});

        })
        .catch((error) => {
            NotificationManager.error(
                `ocurrio un error al obtener el reporte ${error.detail}`,
                'ERROR',
                0
            );
        });
        
        
};
export const listarTareas = () => (dispatch, getStore) => {

    api.get('reporteEstudiante/ReporteTareasPendientes/')
        .then((response) => {
            console.log('reporte tareas ', response)
            dispatch({type: SET_DATA_REPORTE_TAREAS, dataTareas: response});

        })
        .catch((error) => {
            NotificationManager.error(
                `ocurrio un error al obtener el reporte ${error.detail}`,
                'ERROR',
                0
            );
        });
        
        
};


export const actions = {
    listarCursos,
    listarTareas,
};

export const reducers = {
    [SET_DATA_REPORTE_CURSOS]: (state, { dataCursos }) => {
        return {
            ...state,
            dataCursos,
        };
    },
    [SET_DATA_REPORTE_TAREAS]: (state, { dataTareas}) => {
        return {
            ...state,
            dataTareas,
        };
    },
    [SET_PAGE_REPORTE_ADMIN]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_REPORTE_ADMIN]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
};

export const initialState = {

    data: null,
    dataCursos: null,
    dataTareas: null,


};

export default handleActions(reducers, initialState);