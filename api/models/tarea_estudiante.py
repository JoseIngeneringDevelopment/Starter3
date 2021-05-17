from django.db import models
from .estudiante import Estudiante
from .tarea import Tarea

class Tarea_Estudiante(models.Model):

    
    tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE, related_name="tarea_estudiante")
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name="estudiante_tarea")
    fecha_entrega = models.DateField(auto_now_add=False)
    archivo = models.FileField(upload_to='TareasEstudiante', null=True, blank=True)
    texto = models.TextField(max_length=255, null=True, blank=True)
    puntuacion = models.FloatField(null=True, blank=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()