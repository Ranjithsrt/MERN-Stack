from django.db import models

# Create your models here.

class Student(models.Model):
    sno = models.IntegerField()
    sname = models.CharField(max_length=100)
    sclass = models.CharField(max_length=100)
    saddress = models.CharField(max_length=100)
    
# convert to table db area