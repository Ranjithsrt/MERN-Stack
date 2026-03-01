from django.db import models

# Create your models here.

class Datas(models.Model):

    # dh table filed names
    Name = models.CharField(max_length=100 ,default='')
    Age = models.IntegerField(max_length=100 ,default='')
    Address = models.CharField(max_length=100 ,default='')
    Contact = models.CharField(max_length=100 ,default='')
    Email = models.EmailField(max_length=100 ,default='')


    def __str__(self):
        return self.Name

   
