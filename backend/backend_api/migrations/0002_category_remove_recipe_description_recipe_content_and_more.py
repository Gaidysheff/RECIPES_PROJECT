# Generated by Django 4.2 on 2023-04-10 10:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(blank=True, null=True, upload_to='image')),
            ],
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='description',
        ),
        migrations.AddField(
            model_name='recipe',
            name='content',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='contentTwo',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='excerpt',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='recipe',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='image'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='postLabel',
            field=models.CharField(blank=True, choices=[('POPULAR', 'Popular')], max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='slug',
            field=models.SlugField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='title',
            field=models.CharField(max_length=255),
        ),
        migrations.AddField(
            model_name='recipe',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend_api.category'),
        ),
    ]