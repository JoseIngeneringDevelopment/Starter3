# Generated by Django 2.2.15 on 2021-05-05 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20210420_0225'),
    ]

    operations = [
        migrations.AlterField(
            model_name='material',
            name='archivo',
            field=models.FileField(blank=True, max_length=45, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='tarea',
            name='archivo',
            field=models.FileField(blank=True, max_length=45, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='tarea_estudiante',
            name='archivo',
            field=models.FileField(blank=True, max_length=45, null=True, upload_to=''),
        ),
    ]
