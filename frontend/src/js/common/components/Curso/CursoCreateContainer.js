import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/curso/curso';
import CursoCreate from './CursoCreate';

const ms2p = (state) => {
    return {
        ...state.curso,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(CursoCreate);