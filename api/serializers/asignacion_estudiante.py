from rest_framework import serializers
from api.models.asignacion_estudiante import Asignacion_Estudiante


class AsignacionEstudianteRegisterSerializer(serializers.Serializer):
    asignacion = serializers.IntegerField()
    estudiante = serializers.IntegerField()

class AsignacionEstudienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignacion_Estudiante
        fields = (
            'id',
            'asignacion',   
            'estudiante',     
        )
        depth = 2

class AsignacionEstudianteReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignacion_Estudiante
        fields = (
            'id',
            'asignacion',   
            'estudiante',      
        )
        depth = 2

class AsignacionCursosEstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignacion_Estudiante
        fields = (
            'id',
            'asignacion',
            'estudiante',  
        )
        depth = 2