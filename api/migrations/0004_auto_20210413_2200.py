# Generated by Django 2.2.15 on 2021-04-13 22:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210412_2254'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profesion',
            old_name='nombre',
            new_name='profesion_name',
        ),
        migrations.RemoveField(
            model_name='profesion',
            name='descripcion',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='gender',
        ),
        migrations.AlterField(
            model_name='asignacion',
            name='catedratico',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='catedratico_asignacion', to='api.Catedratico'),
        ),
        migrations.AlterField(
            model_name='asignacion',
            name='ciclo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ciclo_asignacion', to='api.Ciclo'),
        ),
        migrations.AlterField(
            model_name='asignacion',
            name='curso',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='curso_asignacion', to='api.Curso'),
        ),
        migrations.AlterField(
            model_name='asignacion',
            name='grado',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='grado_asignacion', to='api.Grado'),
        ),
        migrations.AlterField(
            model_name='asignacion',
            name='seccion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seccion_asignacion', to='api.Seccion'),
        ),
        migrations.AlterField(
            model_name='asignacion_estudiante',
            name='asignacion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='asignacion_estudiante', to='api.Asignacion'),
        ),
        migrations.AlterField(
            model_name='asignacion_estudiante',
            name='estudiante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='estudiante_asignacion', to='api.Estudiante'),
        ),
        migrations.AlterField(
            model_name='catedratico',
            name='profesion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profesion_catedratico', to='api.Profesion'),
        ),
        migrations.AlterField(
            model_name='catedratico',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_catedratico', to='api.Profile'),
        ),
        migrations.AlterField(
            model_name='estudiante',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_estudiante', to='api.Profile'),
        ),
        migrations.AlterField(
            model_name='evento',
            name='cilco',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ciclo_escolar', to='api.Ciclo'),
        ),
        migrations.AlterField(
            model_name='material',
            name='asignacion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='asignacion_material', to='api.Asignacion'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='last_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='profile',
            name='name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='tarea',
            name='asignacion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='asignacion_tarea', to='api.Asignacion'),
        ),
        migrations.AlterField(
            model_name='tarea_estudiante',
            name='estudiante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='estudiante_tarea', to='api.Estudiante'),
        ),
        migrations.AlterField(
            model_name='tarea_estudiante',
            name='tarea',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tarea_estudiante', to='api.Tarea'),
        ),
    ]
