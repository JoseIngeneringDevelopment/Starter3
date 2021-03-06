import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/material/material';
import MaterialCreate from './MaterialCreate';

const ms2p = (state) => {
    return {
        ...state.material,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(MaterialCreate);