import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    'nivel',
    'nivel',
    'NivelForm',
    '/niveles'
);

export default handleActions(reducers, initialState);