from rest_framework import serializers
from api.models.nivel import Nivel

class NivelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel
        fields = '__all__'

class NivelRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel
        fields = (
            'id',
            'nivel_name',
            'nivel_descripcion',
        )