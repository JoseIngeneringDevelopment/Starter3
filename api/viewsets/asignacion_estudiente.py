import json

from django.core.files import File
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings
from django.db import transaction
from api.models import Catedratico, Grado, Seccion, Ciclo, Curso, Asignacion, Asignacion_Estudiante, Estudiante
from api.serializers import AsignacionEstudianteReadSerializer, AsignacionCursosEstudianteSerializer, AsignacionEstudienteSerializer, AsignacionEstudianteRegisterSerializer


class AsignacionEstudianteViewset(viewsets.ModelViewSet):
    queryset = Asignacion_Estudiante.objects.filter(activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("asignacion","estudiante",)
    search_fields = ("asignacion","estudiante",)
    ordering_fields = ("asignacion","estudiante",)

    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return AsignacionEstudianteReadSerializer
        else:
            return AsignacionEstudienteSerializer

    def get_permissions(self):
        """" Define permisos para este recurso """
        if self.action == "create" or self.action == "token":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
    
    def create(self, request):
        try:
            data = request.data
            serializer = AsignacionEstudianteRegisterSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    print("data: ", data)
                    asignacion = Asignacion.objects.get(pk = data.get("asignacion"))
                    estudiante = Estudiante.objects.get(pk = data.get("estudiante"))
                    Asignacion_Estudiante.objects.create(
                        asignacion = asignacion,
                        estudiante = estudiante,
                    )

                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk = None,*args, **kwargs):
        try:
            data = request.data
            serializer = AsignacionEstudianteRegisterSerializer(data = data)
            if serializer.is_valid():
                print("data: ", data)
                print("pk:", pk)
                asignacion = Asignacion.objects.get(pk = data.get("asignacion"))
                estudiante = Estudiante.objects.get(pk = data.get("estudiante"))
                asignacion_estudiante = Asignacion_Estudiante.objects.get(pk = pk)
                asignacion_estudiante.asignacion = asignacion
                asignacion_estudiante.estudiante = estudiante
                asignacion.save()
                
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)




    @action(detail=False, methods=['get'])
    def cursoEstudiantes(self, request):
        try:
            asignacion = request.query_params.get("id")
            print('asignacion',request.query_params.get("id"))
            estudiantes = Asignacion_Estudiante.objects.filter(asignacion_id = asignacion)
            print('estudiantes',estudiantes)
            page = self.paginate_queryset(estudiantes)
            if page is not None:
                serializer = AsignacionCursosEstudianteSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)

            serializer = AsignacionCursosEstudianteSerializer(estudiantes, many= True)
           
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail':str(e)},status=status.HTTP_400_BAD_REQUEST)