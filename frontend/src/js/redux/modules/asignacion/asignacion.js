import { handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { api } from 'api';


const endpoint = "asignacion";
const formName = "AsignacionForm";
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

export const crear = (data) => (dispatch, getStore) =>{
    console.log("dataForm: ", data);
    const ciclo_id = data.ciclo.value;
    const grado_id = data.grado.value;
    const seccion_id = data.seccion.value;
    const curso_id = data.curso.value;
    const catedratico_id = data.catedratico.value
    data.ciclo = ciclo_id;
    data.grado = grado_id;
    data.seccion = seccion_id;
    data.curso = curso_id;
    data.catedratico = catedratico_id;

    api.post(endpoint, data).then(response => {
        console.log("Response: ", response);
        NotificationManager.success('Asignacion creada', 'Éxito', 3000);
        dispatch(push("/asignaciones"));
    }).catch((error) => {
        console.log("error: ", error)
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
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
            

            const ciclos = [];
            const grados = []; 
            const secciones = []; 
            const cursos = []; 
            const catedraticos = [];     
            ciclos.push({
                value: response.ciclo.id, 
                label: response.ciclo.anio,
            });
            grados.push({
                value: response.grado.id, 
                label: response.grado.nombre,
            });
            secciones.push({
                value: response.seccion.id, 
                label: response.seccion.seccion_name,
            });
            cursos.push({
                value: response.curso.id, 
                label: response.curso.curso_name,
            });
            catedraticos.push({
                value: response.catedratico.id, 
                label: `${response.catedratico.profile.name} ${response.catedratico.profile.last_name}`,
            });

            response.ciclo= ciclos;
            response.grado = grados;
            response.seccion = secciones;
            response.curso = cursos;
            response.catedratico = catedraticos;
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

export const editar = (page = id,data) => (dispatch, getStore) =>{
    console.log("dataForm: ", data);
    const ciclo_id = data.ciclo.value;
    const grado_id = data.grado.value;
    const seccion_id = data.seccion.value;
    const curso_id = data.curso.value;
    const catedratico_id = data.catedratico.value
    data.ciclo = ciclo_id;
    data.grado = grado_id;
    data.seccion = seccion_id;
    data.curso = curso_id;
    data.catedratico = catedratico_id;
    dispatch({type: SET_LOADER_ASIGNACION, loader: true});
    api.put(`${endpoint}/${page}`, data)
            .then(() => {
                NotificationManager.success(
                    'Registro actualizado',
                    'Éxito',
                    3000
                );
                if (!!resourceList) dispatch(push(resourceList));
            })
            .catch(() => {
                NotificationManager.error('Error en la edición', 'ERROR', 0);
            })
            .finally(() => {
                dispatch({type: SET_LOADER_ASIGNACION, loader: true});
            });
};

export const eliminar = (page = id) => (dispatch) => {
    dispatch({type: SET_LOADER_ASIGNACION, loader: true});
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
            dispatch({type: SET_LOADER_ASIGNACION, loader: false});
        });
};

export const obtenerCiclo = (search) => (dispatch) => {
    return api.get("ciclo", {search}).then(response => {
        if(response){
            const ciclos = [];
            response.results.forEach(ciclo => {
                ciclos.push({
                    value: ciclo.id, 
                    label: ciclo.anio,
                })
            });
            return ciclos;
        }
    }).catch(error=>{
        console.log("error: ", error)
        return [];
    })
}
export const obtenerGrado = (search) => (dispatch) => {
    return api.get("grado", {search}).then(response => {
        if(response){
            const grados = [];
            response.results.forEach(grado => {
                grados.push({
                    value: grado.id, 
                    label: grado.nombre,
                })
            });
            return grados;
        }
    }).catch(error=>{
        console.log("error: ", error)
        return [];
    })
}
export const obtenerSeccion = (search) => (dispatch) => {
    return api.get("seccion", {search}).then(response => {
        if(response){
            const secciones = [];
            response.results.forEach(seccion => {
                secciones.push({
                    value: seccion.id, 
                    label: seccion.seccion_name,
                })
            });
            return secciones;
        }
    }).catch(error=>{
        console.log("error: ", error)
        return [];
    })
}
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

export const listarCursos = (search) => (dispatch) => {
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
export const obtenerCatedratico = (search) => (dispatch) => {
    return api.get("catedratico", {search}).then(response => {
        if(response){
            const catedraticos = [];
            response.results.forEach(catedratico => {
                catedraticos.push({
                    value: catedratico.id, 
                    label: `${catedratico.profile.name} ${catedratico.profile.last_name}`,
                })
            });
            return catedraticos;
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
    editar,
    eliminar,
    obtenerCiclo,
    obtenerGrado,
    obtenerSeccion,
    obtenerCurso,
    obtenerCatedratico,
    listarCursos
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