from django.db import models
from .asignacion import Asignacion


class Material(models.Model):


    asignacion = models.ForeignKey(Asignacion, on_delete=models.CASCADE, related_name="asignacion_material")
    titulo = models.CharField(max_length=45, null=True, blank=True)
    descripcion = models.TextField(max_length=255, null=True, blank=True)
    archivo = models.FileField(upload_to='Material', null=True, blank=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()