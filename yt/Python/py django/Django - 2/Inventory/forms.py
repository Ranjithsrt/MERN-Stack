from django.forms import ModelForm
from .models import Product

class Product_Form(ModelForm):
    class Meta:  # Eatukku indha model and fields create aguthu ...enna fileda venum
        model = Product
        fields = '__all__'
        # fields = ['product_name', 'product_code', 'price', 'gst']