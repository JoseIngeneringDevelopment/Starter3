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
from api.models import Catedratico, Grado, Seccion, Ciclo, Curso, Asignacion, Asignacion_Estudiante, Estudiante, Material, Tarea
from api.serializers import TareaSerializer, TareaRegisterSerializer, TareaReadSerializer, TareaCursoSerializer

class TareaViewset(viewsets.ModelViewSet):
    queryset = Tarea.objects.filter(activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("asignacion","nombre",)
    search_fields = ("asignacion","nombre",)
    ordering_fields = ("asignacion","nombre",)

    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return TareaReadSerializer
        else:
            return TareaSerializer

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
            print('data',data)
            archivo = data.get("archivo")
            data = json.loads(data["data"])
            print('data', data)
            print('archivo',archivo)
            serializer = TareaRegisterSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    print("data: ", data)
                    asignacion = Asignacion.objects.get(pk = data.get("asignacion"))
                    Tarea.objects.create(
                        asignacion = asignacion,
                        nombre = data.get("nombre"),
                        descripcion = data.get("descripcion"),
                        fecha_entrega = data.get("fecha_entrega"),
                        archivo = File(archivo),
                        nota = data.get("nota")
                    )

                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)



    @action(detail=False, methods=['get'])
    def tareaClase(self, request):
        try:
            asignacion = request.query_params.get("id")
            print('asignacion',request.query_params.get("id"))
            tarea = Tarea.objects.filter(asignacion_id = asignacion)
            print('tarea',tarea)
            page = self.paginate_queryset(tarea)
            if page is not None:
                serializer = TareaCursoSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)

            serializer = TareaCursoSerializer(tarea, many= True)
           
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail':str(e)},status=status.HTTP_400_BAD_REQUEST)