import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/tareaEstudiante/tareaEstudiante';
import TareaEstudianteList from './TareaEstudianteList';

const ms2p = (state) => {
    return {
        ...state.tareaEstudiante,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(TareaEstudianteList);