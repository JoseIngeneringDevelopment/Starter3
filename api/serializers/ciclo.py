from rest_framework import serializers
from api.models.ciclo_escolar import Ciclo

class CicloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = '__all__'

class CicloRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = (
            'id',
            'anio',
        )