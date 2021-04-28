import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { api } from 'api';


const endpoint = "asignacion/cursosProfesor";
const formName = "CursosProfesorForm";
const resourceList = undefined;
const SET_PAGE_ASIGNACION = "SET_PAGE_ASIGNACION";
const SET_DATA_ASIGNACION = "SET_DATA_ASIGNACION";
const SET_LOADER_ASIGNACION = "SET_LOADER_ASIGNACION";

export const listar = (page = 1) => (dispatch, getStore) => {

    const resource = getStore().asignacion;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_ASIGNACION, loader: true});
    api.get(endpoint, params)
        .then((response) => {
            dispatch({type: SET_DATA_ASIGNACION, data: response});
            dispatch({type: SET_PAGE_ASIGNACION, page: page})
        })
        .catch(() => {})
        .finally(() => {
            dispatch({type: SET_LOADER_ASIGNACION, loader: false});
        });

};

export const leer = (page = id) => (dispatch,getStore) => {
    const resource = getStore().asignacion;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_ASIGNACION, loader: true});
    console.log("resorce", resource);
    api.get(`${endpoint}/${page}`)
        .then((response) => {
            

            const cursos = []; 
            cursos.push({
                value: response.curso.id, 
                label: response.curso.curso_name,
            });
            
            response.curso = cursos;
            console.log("response: ", response)
            dispatch({type: SET_DATA_ASIGNACION, response: response});
            dispatch({type: SET_PAGE_ASIGNACION, page: page})
            if (!!formName) dispatch(initializeForm(formName, response));
        })
        .catch((error) => {
            console.log("error: ", error)
            NotificationManager.error('Error en la creación', 'ERROR');
        }).finally(() => {
            dispatch({type: SET_LOADER_ASIGNACION, loader: false});
        });
};

export const obtenerCurso = (search) => (dispatch) => {
    return api.get("curso", {search}).then(response => {
        if(response){
            const cursos = [];
            response.results.forEach(curso => {
                cursos.push({
                    value: curso.id, 
                    label: curso.curso_name,
                })
            });
            return cursos;
        }
    }).catch(error=>{
        console.log("error: ", error)
        return [];
    })
}
export const verasignados = () => (dispatch,getStore) => {
    return(
        <Link to={`asginados/`} className="px-2">
                <i className="material-icons">remove_red_eye</i>
        </Link>
    )
}


export const actions = {
    listar,
    leer,
    obtenerCurso,
    verasignados,
};

export const reducers = {
    [SET_DATA_ASIGNACION]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_ASIGNACION]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_ASIGNACION]: (state, { loader }) => {
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