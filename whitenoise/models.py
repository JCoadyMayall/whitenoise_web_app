from django.db import models

class Track(models.Model):
    title = models.CharField(max_length=100)
    audio = models.FileField(upload_to='../static/audio/')