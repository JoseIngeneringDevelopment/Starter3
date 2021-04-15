import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    'seccion',
    'seccion',
    'SeccionForm',
    '/secciones'
);

export default handleActions(reducers, initialState);