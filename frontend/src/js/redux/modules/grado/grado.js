import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    'grado',
    'grado',
    'GradoForm',
    '/grados'
);

export default handleActions(reducers, initialState);