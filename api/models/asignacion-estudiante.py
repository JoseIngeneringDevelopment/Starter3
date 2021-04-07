from django.db import models
from .asignacion import Asignacion
from .estudiante import Estudiante


class Asignacion_Estudiante(models.Model):
   
    asignacion = models.OneToOneField(Asignacion, on_delete=models.CASCADE, related_name="asignacion")
    estudiante = models.OneToOneField(Estudiante, on_delete=models.CASCADE, related_name="estudiante")

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()