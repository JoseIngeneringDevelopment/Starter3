from rest_framework import serializers
from api.models.grado import Grado

class GradoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grado
        fields = '__all__'

class GradoRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grado
        fields = (
            'nombre', 
            'descripcion',
        )
