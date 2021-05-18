import { connect } from 'react-redux';
import { actions } from  '../../../redux/modules/reportes/reporteestudiante';

import ReporteEstudiante from './ReporteEstudiante';

const ms2p = (state) => {
    return {
        ...state.reporteEstudiante,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(ReporteEstudiante);