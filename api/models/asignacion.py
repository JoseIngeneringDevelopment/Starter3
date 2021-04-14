from .ciclo_escolar import Ciclo
from .grado import Grado
from .seccion import Seccion
from .curso import Curso
from .catedratico import Catedratico
from django.db import models


class Asignacion(models.Model):

    
    ciclo = models.ForeignKey(Ciclo, on_delete=models.CASCADE, related_name="ciclo_asignacion")
    grado = models.ForeignKey(Grado, on_delete=models.CASCADE, related_name="grado_asignacion")
    seccion = models.ForeignKey(Seccion, on_delete=models.CASCADE, related_name="seccion_asignacion")
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name="curso_asignacion")
    catedratico = models.ForeignKey(Catedratico, on_delete=models.CASCADE, related_name="catedratico_asignacion")
    imagen_portada = models.ImageField(upload_to='Portada', null=True, blank=True)
    descripcion = models.TextField(max_length=255, null=True, blank=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    
    def delete(self, *args):
        self.activo = False
        self.save()
        return True
