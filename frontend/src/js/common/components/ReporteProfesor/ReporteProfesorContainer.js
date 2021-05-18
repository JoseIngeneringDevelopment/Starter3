import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/reportes/reporteprofesor';

import ReporteProfesor from './ReporteProfesor';

const ms2p = (state) => {
    return {
        ...state.reporteProfesor,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(ReporteProfesor);