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
from api.models import Catedratico, Grado, Seccion, Ciclo, Curso, Asignacion
from api.serializers import AsignacionSerializer, AsignacionRegisterSerializer, AsignacionReadSerializer, AsignacionCursosCatedraticoSerializer, UserReadSerializer, ProfileSerializer, CatedraticoSerializer

class AsignacionViewset(viewsets.ModelViewSet):
    queryset = Asignacion.objects.filter(activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("grado__nombre","seccion__seccion_name","catedratico",)
    search_fields = ("grado__nombre","seccion__seccion_name","catedratico",)
    ordering_fields = ("grado__nombre","seccion__seccion_name","catedratico",)

    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return AsignacionReadSerializer
        else:
            return AsignacionSerializer

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
            serializer = AsignacionRegisterSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    print("data: ", data)
                

                    ciclo = Ciclo.objects.get(pk = data.get("ciclo"))
                    grado = Grado.objects.get(pk = data.get("grado"))
                    seccion = Seccion.objects.get(pk = data.get("seccion"))
                    curso = Curso.objects.get(pk = data.get("curso"))
                    catedratico = Catedratico.objects.get(pk = data.get("catedratico"))
                    
                    Asignacion.objects.create(
                        ciclo = ciclo,
                        grado = grado,
                        seccion = seccion,
                        curso = curso,
                        catedratico = catedratico,
                        imagen_portada = data.get("imagen_portada"),
                        descripcion = data.get("descripcion")
                    )

                    



                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk = None,*args, **kwargs):
        try:
            data = request.data
            serializer = AsignacionRegisterSerializer(data = data)
            if serializer.is_valid():
                print("data: ", data)
                print("pk:", pk)
                ciclo = Ciclo.objects.get(pk = data.get("ciclo"))
                grado = Grado.objects.get(pk = data.get("grado"))
                seccion = Seccion.objects.get(pk = data.get("seccion"))
                curso = Curso.objects.get(pk = data.get("curso"))
                catedratico = Catedratico.objects.get(pk = data.get("catedratico"))
                asignacion = Asignacion.objects.get(pk = pk)
                print("ciclo",ciclo)
                print("asignacion: ", asignacion)
                asignacion.ciclo = ciclo
                asignacion.grado = grado
                asignacion.seccion = seccion
                asignacion.curso = curso
                asignacion.catedratico = catedratico
                asignacion.descripcion = data.get("descripcion")
                asignacion.save()
                
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'])
    def cursosProfesor(self, request):
        try:
            cat = request.user.profile
            #catedratico = Catedratico.objects.get(catedratico_asignacion = cat.id)
            catedratico = Catedratico.objects.get(profile_id = cat)
            print('Catedratico',catedratico)
            #cursos_profesor = {}
            asignaciones = Asignacion.objects.filter(catedratico_id = catedratico)
            print('asignaciones',asignaciones)
            serializer = AsignacionCursosCatedraticoSerializer(asignaciones, many= True)
           
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail':str(e)},status=status.HTTP_400_BAD_REQUEST)