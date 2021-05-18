import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { api } from 'api';


const endpoint = "reporteAdmin";
const SET_PAGE_REPORTE_ADMIN = "SET_PAGE_REPORTE_ADMIN";
const SET_DATA_REPORTE_ADMIN = "SET_DATA_REPORTE_ADMIN";
const SET_DATA_REPORTE_CICLO = "SET_DATA_REPORTE_CICLO";
const SET_DATA_REPORTE_NIVEL = "SET_DATA_REPORTE_NIVEL";
const SET_LOADER_REPORTE_ADMIN = "SET_LOADER_REPORTE_ADMIN";

export const listarUsuarios = () => (dispatch, getStore) => {

    api.get('reporteAdmin/ReporteUsuarios/')
        .then((response) => {
            console.log('reporte admin ', response)
            dispatch({type: SET_DATA_REPORTE_ADMIN, data: response});

        })
        .catch((error) => {
            NotificationManager.error(
                `ocurrio un error al obtener el reporte ${error.detail}`,
                'ERROR',
                0
            );
        });
        
        
};


export const listarNiveles = () => (dispatch, getStore) => {

    api.get('reporteAdmin/ReporteNiveles/')
        .then((response) => {
            console.log('reporte niveles ', response)
            dispatch({type: SET_DATA_REPORTE_NIVEL, dataNivel: response});

        })
        .catch((error) => {
            NotificationManager.error(
                `ocurrio un error al obtener el reporte ${error.detail}`,
                'ERROR',
                0
            );
        });
        
        
};
export const listarciclo = () => (dispatch, getStore) => {

    api.get('reporteAdmin/ReporteCiclo/')
        .then((response) => {
            console.log('reporte ciclo ', response)
            dispatch({type: SET_DATA_REPORTE_CICLO, dataCiclo: response});

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
    listarUsuarios,
    listarNiveles,
    listarciclo,

};

export const reducers = {
    [SET_DATA_REPORTE_ADMIN]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_DATA_REPORTE_NIVEL]: (state, { dataNivel }) => {
        return {
            ...state,
            dataNivel,
        };
    },
    [SET_DATA_REPORTE_CICLO]: (state, { dataCiclo}) => {
        return {
            ...state,
            dataCiclo,
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
    dataNivel: null,
    dataCiclo: null,


};

export default handleActions(reducers, initialState);