from django.db import models



class Ciclo(models.Model):

   

   
    anio = models.Int(max_length=45, null=True, blank=True)
   
    

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()