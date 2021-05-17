import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import { Login, Profile, Registro } from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';

require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from './common/components/Examples/Grids';
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';
import ProfesionList from './common/components/Profesion/ProfesionListContainer';
import ProfesionCreate from './common/components/Profesion/ProfesionCreateContainer';
import GradoList from './common/components/grado/GradoListContainer';
import GradoCreate from './common/components/grado/GradoCreateContainer';
import SeccionList from './common/components/Seccion/SeccionListContainer';
import SeccionCreate from './common/components/Seccion/SeccionCreateContainer';
import CursoList from './common/components/Curso/CursoListContainer';
import CursoCreate from './common/components/Curso/CursoCreateContainer';
import NivelList from './common/components/Nivel/NivelListContainer';
import NivelCreate from './common/components/Nivel/NivelCreateContainer';
import CatedraticoList from './common/components/Catedratico/CatedraticoListContainer';
import CatedraticoCreate from './common/components/Catedratico/CatedraticoCreateContainer';
import EstudianteList from './common/components/Estudiante/EstudianteListContainer';
import EstudianteCreate from './common/components/Estudiante/EstudianteCreateContainer';
import AsignacionList from './common/components/Asignacion/AsignacionListContainer';
import AsignacionCreate from './common/components/Asignacion/AsignacionCreateContainer';
import CursosProfesorList from './common/components/CursosProfesor/CursosProfesorListContainer';
import AsignacionEstudianteList from './common/components/AsignacionEstudiante/AsignacionEstudianteListContainer';
import MaterialList from './common/components/Material/MaterialListContainer'
import MaterialCreate from './common/components/Material/MateralCreateContainer'
import TareaList from './common/components/Tarea/TareaListContainer'
import TareaCreate from './common/components/Tarea/TareaCreateContainer'
import CursosEstudianteList from './common/components/CursosEstudiante/CursosEstudianteListContainer'
import TareaVerEstudianteList from './common/components/TareaVerEstudiante/TareaVerEstudianteLisContainer'
import TareaEstudianteCreate from './common/components/TareaEstudiante/TareaEstudianteCreateContainer'
import TareaEstudianteList from './common/components/TareaEstudiante/TareaEstudianteListContainer'

require('../style/index.css');

module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Demo} />
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute
                    exact
                    path="/user-profile"
                    component={Profile}
                />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute
                    exact
                    path="/notifications"
                    component={Notificaciones}
                />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />
                <ProtectedRoute exact path="/profesions" component={ProfesionList} />
                <ProtectedRoute exact path="/profesions/create" component={ProfesionCreate} />
                <ProtectedRoute exact path="/profesions/:id/editar" component={ProfesionCreate} />
                <ProtectedRoute exact path="/profesions/ver/:id" component={ProfesionCreate} />
                <ProtectedRoute exact path="/grados" component={GradoList} />
                <ProtectedRoute exact path="/grados/create" component={GradoCreate} />
                <ProtectedRoute exact path="/grados/:id/editar" component={GradoCreate} />
                <ProtectedRoute exact path="/grados/ver/:id" component={GradoCreate} />
                <ProtectedRoute exact path="/secciones" component={SeccionList} />
                <ProtectedRoute exact path="/secciones/create" component={SeccionCreate} />
                <ProtectedRoute exact path="/secciones/:id/editar" component={SeccionCreate} />
                <ProtectedRoute exact path="/secciones/ver/:id" component={SeccionCreate} />
                <ProtectedRoute exact path="/cursos" component={CursoList} />
                <ProtectedRoute exact path="/cursos/create" component={CursoCreate} />
                <ProtectedRoute exact path="/cursos/:id/editar" component={CursoCreate} />
                <ProtectedRoute exact path="/cursos/ver/:id" component={CursoCreate} />
                <ProtectedRoute exact path="/niveles" component={NivelList} />
                <ProtectedRoute exact path="/niveles/create" component={NivelCreate} />
                <ProtectedRoute exact path="/niveles/:id/editar" component={NivelCreate} />
                <ProtectedRoute exact path="/niveles/ver/:id" component={NivelCreate} />
                <ProtectedRoute exact path="/catedraticos" component={CatedraticoList} />
                <ProtectedRoute exact path="/catedraticos/create" component={CatedraticoCreate} />
                <ProtectedRoute exact path="/catedraticos/:id/editar" component={CatedraticoCreate} />
                <ProtectedRoute exact path="/catedraticos/ver/:id" component={CatedraticoCreate} />
                <ProtectedRoute exact path="/estudiantes" component={EstudianteList} />
                <ProtectedRoute exact path="/estudiantes/create" component={EstudianteCreate} />
                <ProtectedRoute exact path="/estudiantes/:id/editar" component={EstudianteCreate} />
                <ProtectedRoute exact path="/estudiantes/ver/:id" component={EstudianteCreate} />
                <ProtectedRoute exact path="/asignaciones" component={AsignacionList} />
                <ProtectedRoute exact path="/asignaciones/create" component={AsignacionCreate} />
                <ProtectedRoute exact path="/asignaciones/:id/editar" component={AsignacionCreate} />
                <ProtectedRoute exact path="/asignaciones/ver/:id" component={AsignacionCreate} />
                <ProtectedRoute exact path="/cursosProfesor" component={CursosProfesorList} />
                <ProtectedRoute exact path="/asignados/ver/:id" component={AsignacionEstudianteList} />
                <ProtectedRoute exact path="/material/ver/:id" component={MaterialList} />
                <ProtectedRoute exact path="/material/create/:id_asignacion" component={MaterialCreate} />
                <ProtectedRoute exact path="/tareas/ver/:id" component={TareaList} />
                <ProtectedRoute exact path="/tareas/create/:id_asignacion" component={TareaCreate} />
                <ProtectedRoute exact path="/cursosEstudiante" component={CursosEstudianteList} />
                <ProtectedRoute exact path="/tareasverestudiante/ver/:id" component={TareaVerEstudianteList} />
                <ProtectedRoute exact path="/tareasestudiante/create/:id_tarea" component={TareaEstudianteCreate} />
                <ProtectedRoute exact path="/tareasestudiante/ver/:id" component={TareaEstudianteList} />
                <Route component={NotFound} />
                
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
