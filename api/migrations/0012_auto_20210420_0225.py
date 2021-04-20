# Generated by Django 2.2.15 on 2021-04-20 02:25

from django.db import migrations

def crarRoles(apps, schema_editor):

    try:
        Rol = apps.get_model("api", "Rol")
        Rol.objects.create(rol_name="administrador")
        Rol.objects.create(rol_name="profesor")
        Rol.objects.create(rol_name="student")
    except Exception as e:
        print("Error al crear roles: ", (str(e)))

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_profile_rol'),
    ]

    operations = [
        migrations.RunPython(crarRoles)
    ]
