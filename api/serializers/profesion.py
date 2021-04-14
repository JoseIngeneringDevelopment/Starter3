from rest_framework import serializers
from api.models.profesion import Profesion

class ProfesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = (
            'id',
            'profesion_name',
        )

class ProfesionRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = (
            'id',
            'profesion_name',
        )