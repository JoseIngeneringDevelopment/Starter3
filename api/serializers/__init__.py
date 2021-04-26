from .user import UserSerializer, UserReadSerializer, ProfileSerializer
from .grado import GradoSerializer, GradoRegistroSerializer
from .profesion import ProfesionSerializer, ProfesionRegisterSerializer
from .curso import CursoSerializer, CursoRegisterSerializer
from .nivel import NivelSerializer, NivelRegisterSerializer
from .seccion import SeccionSerializer, SeccionRegisterSerializer
from .catedratico import CatedraticoSerializer, CatedraticoRegisterSerializer
from .estudiante import EstudianteSerializer, EstudianteRegisterSerializer
from .asignacion import AsignacionSerializer, AsignacionRegisterSerializer, AsignacionReadSerializer, AsignacionCursosCatedraticoSerializer
from .ciclo import CicloSerializer, CicloRegisterSerializer