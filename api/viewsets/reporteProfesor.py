import json

from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from api.models import Catedratico, Grado, Seccion, Ciclo, Curso, Asignacion, Asignacion_Estudiante, Estudiante, Nivel, Tarea, Tarea_Estudiante
from api.serializers import CatedraticoSerializer, EstudianteSerializer, NivelSerializer, CicloSerializer, AsignacionCursosCatedraticoSerializer, TareaEstudianteSerializer

from django.db.models import Count, Q

class ReporteProfesorView(GenericViewSet):
    queryset = Seccion.objects.filter(activo=True)


    @action(detail=False, methods=['get'])
    def ReporteCursosProfesor(self, request):
        try:
            cat = request.user.profile
            catedratico = Catedratico.objects.get(profile_id = cat)
            print('Catedratico',catedratico)
            asignaciones = Asignacion.objects.filter(catedratico_id = catedratico)
            print('asignaciones',asignaciones)
            page = self.paginate_queryset(asignaciones)
            if page is not None:
                serializer = AsignacionCursosCatedraticoSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)

            serializer = AsignacionCursosCatedraticoSerializer(asignaciones, many= True)
           
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail':str(e)},status=status.HTTP_400_BAD_REQUEST)

    

    @action(detail=False, methods=['get'])
    def ReporteTareasPendientes(self, Request):
        try:
            queryset = Tarea_Estudiante.objects.filter(activo=True, puntuacion = None)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializer = TareaEstudianteSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = TareaEstudianteSerializer(queryset, many= True)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'detail': str(e)}, status= status.HTTP_400_BAD_REQUEST)