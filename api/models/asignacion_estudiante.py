from django.db import models
from .asignacion import Asignacion
from .estudiante import Estudiante


class Asignacion_Estudiante(models.Model):
   
    asignacion = models.ForeignKey(Asignacion, on_delete=models.CASCADE, related_name="asignacion_estudiante")
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name="estudiante_asignacion")

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()