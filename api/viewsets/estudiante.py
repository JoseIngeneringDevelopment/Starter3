import json

from django.core.files import File
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings
from django.db import transaction
from api.models import Estudiante, Profile, Rol
from api.serializers import EstudianteSerializer, EstudianteRegisterSerializer

class EstudianteViewset(viewsets.ModelViewSet):
    queryset = Estudiante.objects.filter(activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("profile__name","profile__last_name",)
    search_fields = ("profile__name","profile__last_name",)
    ordering_fields = ("profile__name","profile__last_name",)

    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return EstudianteSerializer
        else:
            return EstudianteRegisterSerializer

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
            serializer = EstudianteRegisterSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    print("data: ", data)
                    
                    user = User.objects.create(
                        email = data.get("email"),
                        username = data.get("username")
                    )
                    user.set_password(data.get("password"))
                    print('password',data.get("password"))
                    user.save()

                    rol = Rol.objects.get(pk=3)
                    profile = Profile.objects.create(
                        user = user,
                        rol = rol,
                        name = data.get("name"),
                        last_name = data.get("last_name"),
                        phone = data.get("phone"),
                        address = data.get("address")
                    )

                    Estudiante.objects.create(
                        profile = profile,
                        carnet = data.get("carnet"),
                        contacto = data.get("contacto"),
                        direccion_contacto = data.get("direccion_contacto")
                    )

                    
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request):
        try:
            data = request.data
            serializer = EstudianteRegisterSerializer(data = data)
            if serializer.is_valid():
                print("data: ", data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)