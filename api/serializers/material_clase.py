from rest_framework import serializers
from api.models.material_de_clase import Material


class MaterialRegisterSerializer(serializers.Serializer):
    asignacion = serializers.IntegerField()
    titulo = serializers.CharField(max_length=100)
    descripcion = serializers.CharField(max_length=100)


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = (
            'id',
            'asignacion',   
            'titulo',
            'descripcion',
            'archivo',     
        )
        depth = 2

class MaterialReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = (
            'id',
            'asignacion',   
            'titulo',
            'descripcion',
            'archivo',    
        )
        depth = 2

class MaterialCursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = (
            'id',
  
            'titulo',
            'descripcion',

        )
        depth = 2