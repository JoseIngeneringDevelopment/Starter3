from rest_framework import serializers
from api.models.curso import Curso

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = (
            'id',
            'curso_name',
            'curso_descripcion',
        )

class CursoRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = (
            'id',
            'curso_name',
            'curso_descripcion',
        )