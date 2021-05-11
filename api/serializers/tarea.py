from rest_framework import serializers
from api.models.tarea import Tarea


class TareaRegisterSerializer(serializers.Serializer):
    asignacion = serializers.IntegerField()
    nombre = serializers.CharField(max_length=100)
    descripcion = serializers.CharField(max_length=100)
    fecha_entrega = serializers.DateField()
    nota = serializers.FloatField()


class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = (
            'id',
            'asignacion',   
            'nombre',
            'descripcion',
            'archivo',    
            'fecha_entrega',
            'nota', 
        )
        depth = 2

class TareaReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = (
            'id',
            'asignacion',   
            'nombre',
            'descripcion',
            'archivo',
            'fecha_entrega',
            'nota',     
        )
        depth = 2

class TareaCursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = (
            'id',
            'nombre',
            'descripcion',
            'fecha_entrega',
            'nota',

        )
        depth = 2