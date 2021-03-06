from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from api import viewsets


router = DefaultRouter()
router.register(r'user', viewsets.UserViewset)
router.register(r'profesion',viewsets.ProfesionViewset)
router.register(r'grado',viewsets.GradoViewset)
router.register(r'seccion',viewsets.SeccionViewset)
router.register(r'curso',viewsets.CursoViewset)
router.register(r'nivel',viewsets.NivelViewset)
router.register(r'catedratico',viewsets.CatedraticoViewset)
router.register(r'estudiante',viewsets.EstudianteViewset)
router.register(r'asignacion',viewsets.AsignacionViewset)
router.register(r'ciclo',viewsets.CicloViewset)
router.register(r'asignaciones',viewsets.AsignacionEstudianteViewset)
router.register(r'material',viewsets.MaterialViewset)
router.register(r'tarea',viewsets.TareaViewset)
router.register(r'tareaEstudiante',viewsets.TareaEstudianteViewset)
router.register(r'reporteAdmin', viewsets.ReporteAdminView)
router.register(r'reporteProfesor', viewsets.ReporteProfesorView)
router.register(r'reporteEstudiante', viewsets.ReporteEstudianteView)

urlpatterns = [
    path('api/', include(router.urls)),
    url(r"^api/token", obtain_auth_token, name="api-token"),
    path('api-auth/', include('rest_framework.urls')),
]
