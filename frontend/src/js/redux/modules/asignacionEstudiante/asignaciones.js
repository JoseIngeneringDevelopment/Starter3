import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { api } from 'api';


const endpoint = "asignaciones";
const formName = "AsignacioEstudiantesForm";
const resourceList = undefined;
const SET_PAGE_ASIGNACIONES = "SET_PAGE_ASIGNACIONES";
const SET_DATA_ASIGNACIONES = "SET_DATA_ASIGNACIONES";
const SET_LOADER_ASIGNACIONES = "SET_LOADER_ASIGNACIONES";

export const listar = (page = 1,id) => (dispatch, getStore) => {

    const resource = getStore().asignaciones;
    const params = { page,id };
    console.log('params:',params)
    console.log('resource',resource)
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_ASIGNACIONES, loader: true});
    api.get("asignaciones/cursoEstudiantes", params)
        .then((response) => {
            dispatch({type: SET_DATA_ASIGNACIONES, data: response});
            dispatch({type: SET_PAGE_ASIGNACIONES, page: page})
        })
        .catch(() => {})
        .finally(() => {
            dispatch({type: SET_LOADER_ASIGNACIONES, loader: false});
        });

};

export const leer = (page = id) => (dispatch,getStore) => {
    const resource = getStore().asignaciones;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_ASIGNACIONES, loader: true});
    console.log("resorce", resource);
    api.get(`${endpoint}/${page}`)
        .then((response) => {
            

            const estudiantes = []; 
            estudiantes.push({
                value: response.estudiantes.id, 
                label: `${estudiante.profile.name} ${estudiante.profile.last_name}`,
            });
            
            response.estudiantes = estudiantes;
            console.log("response: ", response)
            dispatch({type: SET_DATA_ASIGNACIONES, response: response});
            dispatch({type: SET_PAGE_ASIGNACIONES, page: page})
            if (!!formName) dispatch(initializeForm(formName, response));
        })
        .catch((error) => {
            console.log("error: ", error)
            NotificationManager.error('Error en la creación', 'ERROR');
        }).finally(() => {
            dispatch({type: SET_LOADER_ASIGNACIONES, loader: false});
        });
};

export const crear = (data) => (dispatch, getStore) =>{
    console.log("dataForm: ", data);
    const asignacion_id = data.asignacion;
    const estudiante = data.estudiante.value;
   
    data.asignacion = asignacion_id;
    data.estudiante = estudiante;


    api.post(endpoint, data).then(response => {
        console.log("Response: ", response);
        NotificationManager.success('Se agrego estudiante', 'Éxito', 3000);
        dispatch(push("/cursosProfesor"));
    }).catch((error) => {
        console.log("error: ", error)
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
    });
};


export const obtenerEstudiantes = (search) => (dispatch) => {
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
    obtenerEstudiantes,
    crear,
};

export const reducers = {
    [SET_DATA_ASIGNACIONES]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_ASIGNACIONES]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_ASIGNACIONES]: (state, { loader }) => {
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