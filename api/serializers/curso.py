from rest_framework import serializers
from api.models.curso import Curso

class ProfesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'

class ProfesionRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = (
            'id',
            'curso_name',
            'curso_descripcion',
        )