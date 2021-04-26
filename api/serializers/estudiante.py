from rest_framework import serializers
from api.models.estudiante import Estudiante
from api.models.profile import Profile
from django.contrib.auth.models import User

class EstudianteRegisterSerializer(serializers.Serializer):
    carnet = serializers.CharField(max_length=20)
    email = serializers.EmailField()
    name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=20)
    

class EstudianteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estudiante
        fields = (
            'id',
            'profile',   
            'carnet',      
        )
        depth = 1