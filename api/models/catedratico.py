from django.db import models
from .profesion import Profesion
from .profile import Profile


class Catedratico(models.Model):


    profile = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="profile_catedratico")
    profesion = models.OneToOneField(Profesion, on_delete=models.CASCADE, related_name="profesion_catedratico")
    

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()