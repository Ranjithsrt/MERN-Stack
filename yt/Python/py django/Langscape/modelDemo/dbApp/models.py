from django.db import models

# Create your models here.

class Employee(models.Model):# model -parent
    empNo = models.IntegerField()
    empName = models.CharField(max_length=50)
    empSalary = models.IntegerField()
    emAddress = models.CharField(max_length=50)()
    
