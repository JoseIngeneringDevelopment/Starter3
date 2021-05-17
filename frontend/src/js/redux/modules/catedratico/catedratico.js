import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { api } from 'api';


const endpoint = "catedratico";
const SET_PAGE_CATEDRATICO = "SET_PAGE_CATEDRATICO";
const SET_DATA_CATEDRATICO = "SET_DATA_CATEDRATICO";
const SET_LOADER_CATEDRATICO = "SET_LOADER_CATEDRATICO";

export const listar = (page = 1) => (dispatch, getStore) => {

    const resource = getStore().catedratico;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_CATEDRATICO, loader: true});
    api.get(endpoint, params)
        .then((response) => {
            dispatch({type: SET_DATA_CATEDRATICO, data: response});
            dispatch({type: SET_PAGE_CATEDRATICO, page: page})
        })
        .catch(() => {})
        .finally(() => {
            dispatch({type: SET_LOADER_CATEDRATICO, loader: false});
        });

};

export const crear = (data) => (dispatch, getStore) =>{
    console.log("dataForm: ", data);
    const profesion_id = data.profesion.value;
    data.profesion = profesion_id;

    api.post(endpoint, data).then(response => {
        console.log("Response: ", response);
        NotificationManager.success('Profesor creado', 'Éxito', 3000);
        dispatch(push("/catedraticos"));
    }).catch((error) => {
        console.log("error: ", error)
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
    });
};

export const leer = (page = id) => (dispatch,getStore) => {
    const resource = getStore().catedratico;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_CATEDRATICO, loader: true});
    console.log("resorce", resource);
    api.get(`${endpoint}/${page}`)
        .then((response) => {
            

            const profesiones = [];
   

            profesiones.push({
                value: response.profesion.id, 
                label: response.profesion.profesion_name,
            });

            response.profesion = profesiones;
            console.log("response: ", response)
            dispatch({type: SET_DATA_CATEDRATICO, response: response});
            dispatch({type: SET_PAGE_CATEDRATICO, page: page})
            if (!!formName) dispatch(initializeForm(formName, response));
        })
        .catch((error) => {
            console.log("error: ", error)
            NotificationManager.error('Error en la creación', 'ERROR');
        }).finally(() => {
            dispatch({type: SET_LOADER_CATEDRATICO, loader: false});
        });
};

export const eliminar = (page = id) => (dispatch) => {
    dispatch({type: SET_LOADER_CATEDRATICO, loader: true});
    api.eliminar(`${endpoint}/${page}`)
        .then(() => {
            dispatch(listar());
            NotificationManager.success(
                'Registro eliminado',
                'Éxito',
                3000
            );
        })
        .catch(() => {
            NotificationManager.success(
                'Error en la transacción',
                'Éxito',
                3000
            );
        })
        .finally(() => {
            dispatch({type: SET_LOADER_CATEDRATICO, loader: false});
        });
};

export const obtenerProfeciones = (search) => (dispatch) => {
    return api.get("profesion", {search}).then(response => {
        if(response){
            const profesiones = [];
            response.results.forEach(profesion => {
                profesiones.push({
                    value: profesion.id, 
                    label: profesion.profesion_name,
                })
            });
            return profesiones;
        }
    }).catch(error=>{
        console.log("error: ", error)
        return [];
    })
}

export const actions = {
    listar,
    crear,
    leer,
    obtenerProfeciones,
    eliminar,
};

export const reducers = {
    [SET_DATA_CATEDRATICO]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_CATEDRATICO]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_CATEDRATICO]: (state, { loader }) => {
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