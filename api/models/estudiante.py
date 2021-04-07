from django.db import models
from models import Profile


class Estudiante(models.Model):

   

    profile = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="profile")
    carnet = models.CharField(max_length=25, null=True, blank=True)
    contacto = models.CharField(max_length=45, null=True, blank=True)
    direccion_contacto = models.CharField(max_length = 45, null=True, blank=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()