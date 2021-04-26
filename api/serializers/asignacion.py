from rest_framework import serializers
from api.models.asignacion import Asignacion
from api.models.profile import Profile
from django.contrib.auth.models import User

class AsignacionRegisterSerializer(serializers.Serializer):
    ciclo = serializers.IntegerField()
    grado = serializers.IntegerField()
    seccion = serializers.IntegerField()
    curso = serializers.IntegerField()
    catedratico = serializers.IntegerField()
    descripcion = serializers.CharField(max_length=80)
    

class AsignacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignacion
        fields = (
            'id',
            'ciclo',   
            'grado',
            'seccion',
            'curso',
            'catedratico',
            'descripcion',      
        )
        depth = 3

class AsignacionReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignacion
        fields = (
            'id',
            'ciclo',   
            'grado',
            'seccion',
            'curso',
            'catedratico',
            'descripcion',      
        )
        depth = 2

class AsignacionCursosCatedraticoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignacion
        fields = (
            'id',
            'curso',  
        )
        depth = 2