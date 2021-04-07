from django.db import models
from .profesion import Profesion


class Catedratico(models.Model):


    profile = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="profile")
    profesion = models.OneToOneField(Profesion, on_delete=models.CASCADE, related_name="profesion")
    

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()