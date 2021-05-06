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
from api.models import Catedratico, Grado, Seccion, Ciclo, Curso, Asignacion, Asignacion_Estudiante, Estudiante, Material
from api.serializers import MaterialSerializer, MaterialRegisterSerializer, MaterialReadSerializer, MaterialCursoSerializer

class MaterialViewset(viewsets.ModelViewSet):
    queryset = Material.objects.filter(activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("asignacion","titulo",)
    search_fields = ("asignacion","titulo",)
    ordering_fields = ("asignacion","titulo",)

    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return MaterialReadSerializer
        else:
            return MaterialCursoSerializer

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
            serializer = MaterialRegisterSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    print("data: ", data)
                    asignacion = Asignacion.objects.get(pk = data.get("asignacion"))
                    Material.objects.create(
                        asignacion = asignacion,
                        titulo = data.get("titulo"),
                        descripcion = data.get("descripcion"),
                        archivo = File(archivo),
                    )

                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)



    @action(detail=False, methods=['get'])
    def materialClase(self, request):
        try:
            asignacion = request.query_params.get("id")
            print('asignacion',request.query_params.get("id"))
            material = Material.objects.filter(asignacion_id = asignacion)
            print('material',material)
            page = self.paginate_queryset(material)
            if page is not None:
                serializer = MaterialCursoSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)

            serializer = MaterialCursoSerializer(material, many= True)
           
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail':str(e)},status=status.HTTP_400_BAD_REQUEST)