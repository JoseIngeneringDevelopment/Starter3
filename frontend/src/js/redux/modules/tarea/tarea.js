import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
//import { api } from 'api';
import { api } from "../../../utility/api";



const endpoint = "tarea";
const formName = "tareaForm";
const resourceList = undefined;
const SET_PAGE_TAREA = "SET_PAGE_TAREA";
const SET_DATA_TAREA = "SET_DATA_TAREA";
const SET_LOADER_TAREA = "SET_LOADER_TAREA";

export const listar = (page = 1,id) => (dispatch, getStore) => {
    console.log('store',getStore())
    const resource = getStore().tarea;
    const params = { page,id };
    console.log('params:',params)
    console.log('resource',resource)
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_TAREA, loader: true});
    api.get("tarea/tareaClase", params)
        .then((response) => {
            dispatch({type: SET_DATA_TAREA, data: response});
            console.log('tarea clase:',response)
            dispatch({type: SET_PAGE_TAREA, page: page})
            console.log('pagina',page)
        })
        .catch(() => {})
        .finally(() => {
            dispatch({type: SET_LOADER_TAREA, loader: false});
        });

};

export const leer = (page = id) => (dispatch,getStore) => {
    const resource = getStore().tarea;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_TAREA, loader: true});
    console.log("resorce", resource);
    api.get(`${endpoint}/${page}`)
        .then((response) => {
            

            const asignaciones = []; 
            asignacion.push({
                value: response.asignaciones.id, 
                label: response.curso.curso_name,
            });
            
            response.asignaciones = asignaciones;
            console.log("response: ", response)
            dispatch({type: SET_DATA_TAREA, response: response});
            dispatch({type: SET_PAGE_TAREA, page: page})
            if (!!formName) dispatch(initializeForm(formName, response));
        })
        .catch((error) => {
            console.log("error: ", error)
            NotificationManager.error('Error en la creación', 'ERROR');
        }).finally(() => {
            dispatch({type: SET_LOADER_TAREA, loader: false});
        });
};

export const crear = (formData, archivos) => (dispatch, getStore) =>{
    console.log("dataForm: ", formData);
    console.log("archivos",archivos)
    //const asignacion_id = formData.asignacion.value;
    //formData.asignacion = asignacion_id;
    api.postAttachments(endpoint, formData, archivos).then(response => {
        console.log("Response: ", response);
        NotificationManager.success('Se agrego tarea', 'Éxito', 3000);
        dispatch(push("/cursosProfesor"));
    }).catch((error) => {
        console.log("error: ", error)
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
    });
};


export const obtenerAsignacion = (search) => (dispatch) => {
    return api.get("asignacion", {search}).then(response => {
        if(response){
            const asignaciones = [];
            response.results.forEach(asignacion => {
                asignaciones.push({
                    value: asignacion.id, 
                    label: `${asignacion.catedratico.profile.name} ${asignacion.catedratico.profile.last_name} ${asignacion.curso.curso_name}`,
                })
            });
            return asignaciones;
        }
    }).catch(error=>{
        console.log("error: ", error)
        return [];
    })
}



export const actions = {
    listar,
    leer,
    crear,
    obtenerAsignacion,
};

export const reducers = {
    [SET_DATA_TAREA]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_TAREA]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_TAREA]: (state, { loader }) => {
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