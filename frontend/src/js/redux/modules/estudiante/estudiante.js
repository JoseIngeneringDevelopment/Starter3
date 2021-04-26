import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { api } from 'api';


const endpoint = "estudiante";
const SET_PAGE_ESTUDIANTE = "SET_PAGE_ESTUDIANTE";
const SET_DATA_ESTUDIANTE = "SET_DATA_ESTUDIANTE";
const SET_LOADER_ESTUDIANTE = "SET_LOADER_ESTUDIANTE";

export const listar = (page = 1) => (dispatch, getStore) => {

    const resource = getStore().estudiante;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_ESTUDIANTE, loader: true});
    api.get(endpoint, params)
        .then((response) => {
            dispatch({type: SET_DATA_ESTUDIANTE, data: response});
            dispatch({type: SET_PAGE_ESTUDIANTE, page: page})
        })
        .catch(() => {})
        .finally(() => {
            dispatch({type: SET_LOADER_ESTUDIANTE, loader: false});
        });

};

export const crear = (data) => (dispatch, getStore) =>{
    console.log("dataForm: ", data);
    //const profesion_id = data.profesion.value;
    //data.profesion = profesion_id;

    api.post(endpoint, data).then(response => {
        console.log("Response: ", response);
        NotificationManager.success('Estudiante creado', 'Éxito', 3000);
        dispatch(push("/estudiantes"));
    }).catch((error) => {
        console.log("error: ", error)
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
    });
};



export const actions = {
    listar,
    crear
};

export const reducers = {
    [SET_DATA_ESTUDIANTE]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_ESTUDIANTE]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_ESTUDIANTE]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
};

export const initialState = {
    loader: false,
    data: {
        results: [],
        count: 0,
    },
    item: {},
    page: 1,
    ordering: '',
    search: '',
};

export default handleActions(reducers, initialState);