import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/seccion/seccion';
import SeccionCreate from './SeccionCreate';

const ms2p = (state) => {
    return {
        ...state.seccion,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(SeccionCreate);