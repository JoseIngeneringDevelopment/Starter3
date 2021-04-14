import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    'profesion',
    'profesion',
    'ProfesionForm',
    '/profesions'
);

export default handleActions(reducers, initialState);