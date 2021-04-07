from django.db import models
from .estudiante import Estudiante
from .tarea import Tarea

class Tarea_Estudiante(models.Model):

    
    tarea = models.OneToOneField(Tarea, on_delete=models.CASCADE, related_name="tarea")
    estudiante = models.OneToOneField(Estudiante, on_delete=models.CASCADE, related_name="estudiante")
    fecha_entrega = models.DateTimeField(auto_now_add=True)
    archivo = models.CharField(max_length=45, null=True, blank=True)
    texto = models.TextField(max_length=255, null=True, blank=True)
    puntuacion = models.Float(null=True, blank=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()