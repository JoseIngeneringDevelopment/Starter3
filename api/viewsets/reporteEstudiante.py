import json

from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from api.models import Catedratico, Grado, Seccion, Ciclo, Curso, Asignacion, Asignacion_Estudiante, Estudiante, Nivel, Tarea, Tarea_Estudiante
from api.serializers import CatedraticoSerializer, EstudianteSerializer, NivelSerializer, CicloSerializer, AsignacionCursosCatedraticoSerializer, TareaEstudianteSerializer, AsignacionCursosEstudianteSerializer, TareaSerializer

from django.db.models import Count, Q

class ReporteEstudianteView(GenericViewSet):
    queryset = Seccion.objects.filter(activo=True)


    @action(detail=False, methods=['get'])
    def ReporteCursosEstudiante(self, request):
        try:
            est = request.user.profile
            estudiante = Estudiante.objects.get(profile_id = est)
            print('Catedratico',estudiante)
            cursos = Asignacion_Estudiante.objects.filter(estudiante_id = estudiante, activo=True)
            print('asignaciones',cursos)
            page = self.paginate_queryset(cursos)
            if page is not None:
                serializer = AsignacionCursosEstudianteSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)

            serializer = AsignacionCursosEstudianteSerializer(cursos, many= True)
           
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail':str(e)},status=status.HTTP_400_BAD_REQUEST)

    

    @action(detail=False, methods=['get'])
    def ReporteTareasPendientes(self, Request):
        try:
            queryset = Tarea.objects.filter(activo=True)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializer = TareaSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = TareaSerializer(queryset, many= True)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'detail': str(e)}, status= status.HTTP_400_BAD_REQUEST)