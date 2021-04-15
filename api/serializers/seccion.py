from rest_framework import serializers
from api.models.seccion import Seccion

class SeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seccion
        fields = '__all__'

class SeccionRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seccion
        fields = (
            'id',
            'seccion_name',
        )