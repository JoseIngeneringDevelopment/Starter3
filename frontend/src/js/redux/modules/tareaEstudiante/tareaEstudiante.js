import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
//import { api } from 'api';
import { api } from "../../../utility/api";



const endpoint = "tareaEstudiante";
const formName = "tareaEstudianteForm";
const resourceList = undefined;
const SET_PAGE_TAREA_ESTUDIANTE = "SET_PAGE_TAREA_ESTUDIANTE";
const SET_DATA_TAREA_ESTUDIANTE = "SET_DATA_TAREA_ESTUDIANTE";
const SET_LOADER_TAREA_ESTUDIANTE = "SET_LOADER_TAREA_ESTUDIANTE";

export const listar = (page = 1,id) => (dispatch, getStore) => {
    console.log('store',getStore())
    const resource = getStore().tareaEstudiante;
    const params = { page,id };
    console.log('params:',params)
    console.log('resource',resource)
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_TAREA_ESTUDIANTE, loader: true});
    api.get("tareaEstudiante/tareaEstudiante", params)
        .then((response) => {
            dispatch({type: SET_DATA_TAREA_ESTUDIANTE, data: response});
            console.log('tarea clase:',response)
            dispatch({type: SET_PAGE_TAREA_ESTUDIANTE, page: page})
            console.log('pagina',page)
        })
        .catch(() => {})
        .finally(() => {
            dispatch({type: SET_LOADER_TAREA_ESTUDIANTE, loader: false});
        });

};

export const leer = (page = id) => (dispatch,getStore) => {
    const resource = getStore().tarea;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_TAREA_ESTUDIANTE, loader: true});
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
            dispatch({type: SET_DATA_TAREA_ESTUDIANTE, response: response});
            dispatch({type: SET_PAGE_TAREA_ESTUDIANTE, page: page})
            if (!!formName) dispatch(initializeForm(formName, response));
        })
        .catch((error) => {
            console.log("error: ", error)
            NotificationManager.error('Error en la creación', 'ERROR');
        }).finally(() => {
            dispatch({type: SET_LOADER_TAREA_ESTUDIANTE, loader: false});
        });
};

export const crear = (formData, archivos) => (dispatch, getStore) =>{
    console.log("dataForm: ", formData);
    console.log("archivos",archivos)
    const estudiante = formData.estudiante.value;
    formData.estudiante = estudiante;
    //const asignacion_id = formData.asignacion.value;
    //formData.asignacion = asignacion_id;
    api.postAttachments(endpoint, formData, archivos).then(response => {
        console.log("Response: ", response);
        NotificationManager.success('Se envio la tarea', 'Éxito', 3000);
        dispatch(push("/cursosProfesor"));
    }).catch((error) => {
        console.log("error: ", error)
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
    });
};


export const obtenerEstudiante = (search) => (dispatch) => {
    return api.get("estudiante", {search}).then(response => {
        if(response){
            const estudiantes = [];
            response.results.forEach(estudiante => {
                estudiantes.push({
                    value: estudiante.id, 
                    label: `${estudiante.carnet} ${estudiante.profile.name} ${estudiante.profile.last_name}`,
                })
            });
            console.log('estudiantes',estudiantes)
            return estudiantes;
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
    obtenerEstudiante,
};

export const reducers = {
    [SET_DATA_TAREA_ESTUDIANTE]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_TAREA_ESTUDIANTE]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_TAREA_ESTUDIANTE]: (state, { loader }) => {
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