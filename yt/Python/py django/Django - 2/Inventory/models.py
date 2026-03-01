from django.db import models

# Create your models here.

class Product(models.Model):

    product_name = models.CharField(max_length=200,null=True,blank=True)
    product_code = models.CharField(max_length=200,null=True,blank=True)
    price = models.FloatField(default=0)
    gst = models.IntegerField(default=0)
     
    def __str__(self):
        return self.product_name  # the name of the product will be displayed in the admin page
