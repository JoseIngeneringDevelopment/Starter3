from rest_framework import serializers
from api.models.tarea_estudiante import Tarea_Estudiante


class TareaEstudianteRegisterSerializer(serializers.Serializer):
    tarea = serializers.IntegerField()
    estudiante = serializers.IntegerField()
    fecha_entrega = serializers.DateField()
    texto = serializers.CharField(max_length=100)


class TareaEstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea_Estudiante
        fields = (
            'id',
            'tarea',   
            'estudiante',
            'fecha_entrega',
            'archivo',    
            'texto',
            'puntuacion', 
        )
        depth = 2

class TareaEstuddianteReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea_Estudiante
        fields = (
            'id',
            'tarea',   
            'estudiante',
            'fecha_entrega',
            'archivo',    
            'texto',
            'puntuacion', 
        )
        depth = 2

class TareaEstudianteCursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea_Estudiante
        fields = (
            'id',
            'tarea',   
            'estudiante',
            'fecha_entrega',
            'archivo',    
            'texto',
            'puntuacion', 
        )
        depth = 2