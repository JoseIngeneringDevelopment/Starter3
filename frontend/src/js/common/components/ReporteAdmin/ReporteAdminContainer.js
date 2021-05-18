import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/reportes/reporteadmin';
import ReporteAdmin from './ReporteAdmin';

const ms2p = (state) => {
    return {
        ...state.reporteAdmin,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(ReporteAdmin);