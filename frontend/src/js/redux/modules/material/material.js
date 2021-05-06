import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
//import { api } from 'api';
import { api } from "../../../utility/api";



const endpoint = "material";
const formName = "MaterialForm";
const resourceList = undefined;
const SET_PAGE_MATERIAL = "SET_PAGE_MATERIAL";
const SET_DATA_MATERIAL = "SET_DATA_MATERIAL";
const SET_LOADER_MATERIAL = "SET_LOADER_MATERIAL";

export const listar = (page = 1,id) => (dispatch, getStore) => {
    console.log('store',getStore())
    const resource = getStore().material;
    const params = { page,id };
    console.log('params:',params)
    console.log('resource',resource)
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_MATERIAL, loader: true});
    api.get("material/materialClase", params)
        .then((response) => {
            dispatch({type: SET_DATA_MATERIAL, data: response});
            console.log('material clase:',response)
            dispatch({type: SET_PAGE_MATERIAL, page: page})
            console.log('pagina',page)
        })
        .catch(() => {})
        .finally(() => {
            dispatch({type: SET_LOADER_MATERIAL, loader: false});
        });

};

export const leer = (page = id) => (dispatch,getStore) => {
    const resource = getStore().material;
    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_MATERIAL, loader: true});
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
            dispatch({type: SET_DATA_MATERIAL, response: response});
            dispatch({type: SET_PAGE_MATERIAL, page: page})
            if (!!formName) dispatch(initializeForm(formName, response));
        })
        .catch((error) => {
            console.log("error: ", error)
            NotificationManager.error('Error en la creación', 'ERROR');
        }).finally(() => {
            dispatch({type: SET_LOADER_MATERIAL, loader: false});
        });
};

export const crear = (formData, archivos) => (dispatch, getStore) =>{
    console.log("dataForm: ", formData);
    console.log("archivos",archivos)
    const asignacion_id = formData.asignacion.value;
    formData.asignacion = asignacion_id;
    api.postAttachments(endpoint, formData, archivos).then(response => {
        console.log("Response: ", response);
        NotificationManager.success('Se agrego material', 'Éxito', 3000);
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
    [SET_DATA_MATERIAL]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_MATERIAL]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_MATERIAL]: (state, { loader }) => {
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