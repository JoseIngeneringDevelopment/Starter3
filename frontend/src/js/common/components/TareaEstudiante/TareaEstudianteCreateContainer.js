import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/tareaEstudiante/tareaEstudiante';
import TareaEstudianteCreate from './TareaEstudianteCreate';

const ms2p = (state) => {
    return {
        ...state.tareaEstudiante,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(TareaEstudianteCreate);