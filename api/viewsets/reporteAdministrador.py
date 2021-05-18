import json

from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from api.models import Catedratico, Grado, Seccion, Ciclo, Curso, Asignacion, Asignacion_Estudiante, Estudiante, Nivel
from api.serializers import CatedraticoSerializer, EstudianteSerializer, NivelSerializer, CicloSerializer

from django.db.models import Count, Q

class ReporteAdminView(GenericViewSet):
    queryset = Seccion.objects.filter(activo=True)


    @action(detail=False, methods=['get'])
    def ReporteCiclo(self, Request):
        try:
            queryset = Ciclo.objects.filter(activo=True)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializer = CicloSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = CicloSerializer(queryset, many= True)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'detail': str(e)}, status= status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def ReporteUsuarios(self, Request):
        try:
            usuarios = User.objects.filter(
                is_active = True
            ).count()
            ciclo = Ciclo.objects.filter(
                activo = True
            )

            catedraticos = Catedratico.objects.filter(
                activo = True
            ).count()
            estudiantes = Estudiante.objects.filter(
                activo = True
            ).count()
            grados = Grado.objects.filter(activo=True).count()
            secciones = Seccion.objects.filter(activo=True).count()


            data = {
                'total_usuarios':{
                'usuarios': usuarios,
                'catedraticos': catedraticos,
                'estudiantes': estudiantes,
                'grados': grados,
                'secciones': secciones,
                }

            }
            print('data',data)


            return Response(data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'detail': str(e)}, status= status.HTTP_400_BAD_REQUEST)
    

    @action(detail=False, methods=['get'])
    def ReporteNiveles(self, Request):
        try:
            queryset = Nivel.objects.filter(activo=True)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializer = NivelSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = NivelSerializer(queryset, many= True)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'detail': str(e)}, status= status.HTTP_400_BAD_REQUEST)





