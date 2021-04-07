from .ciclo_escolar import Ciclo
from .grado import Grado
from .seccion import Seccion
from .curso import Curso
from .catedratico import Catedratico


class Asignacion(models.Model):

    
    ciclo = models.OneToOneField(Ciclo, on_delete=models.CASCADE, related_name="ciclo")
    grado = models.OneToOneField(Grado, on_delete=models.CASCADE, related_name="grado")
    seccion = models.OneToOneField(Seccion, on_delete=models.CASCADE, related_name="seccion")
    curso = models.OneToOneField(Curso, on_delete=models.CASCADE, related_name="curso")
    catedratico = models.OneToOneField(Catedratico, on_delete=models.CASCADE, related_name="catedratico")
    imagen_portada = models.ImageField(upload_to='Portada', null=True, blank=True)
    descripcion = models.TextField(max_length=255, null=True, blank=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    
    def delete(self, *args):
        self.activo = False
        self.save()
        return True
