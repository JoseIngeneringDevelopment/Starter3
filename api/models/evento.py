from django.db import models
from .ciclo_escolar import Ciclo


class Evento(models.Model):

   

    ciclo = models.ForeignKey(Ciclo, on_delete=models.CASCADE, related_name="ciclo_escolar")
    titulo = models.CharField(max_length=45, null=True, blank=True)
    descripcion = models.TextField(max_length=255, null=True, blank=True)
    fecha = models.BooleanField(default=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()