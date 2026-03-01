from django.shortcuts import render, redirect

# forms
from .forms import *
from .models import *

def home(request):
    data = {
        "name": "John Doe",
        "title": "Home Page", 
        "role": "Admin",
        "message": "Welcome to the Home Page!",
        "numbers": [1, 2, 3, 4, 5],
        "subjects": {"Math", "Science", "English", "History", "Geography"}
    }
    return render(request, 'home.html', data)

def about(request):
    return render(request, 'about.html')

def service(request):
    return render(request, 'service.html')

def contact(request):
    return render(request, 'contact.html')

# create
def addproducts(request):
    context = {
        'product_form': Product_Form()
    }
    if request.method == 'POST':
        # print(request.POST)
        form = Product_Form(request.POST)
        if form.is_valid():
            form.save()

    return render(request, 'products.html', context)

# read
def AllProducts(request):
    all_products = Product.objects.all()

    context = {
        'all_products': all_products
    }
    
    return render(request, 'products.html', context)


# delete


def Deleteproduct(request, id):

    selected_product = Product.objects.get(id=id)
    selected_product.delete()

    # automatically redirect
    return redirect('/inventory/products/')

# update
 
def ProductUpdate(request, id):
    selected_product = Product.objects.get(id=id)
 

    context = {
        'product_form': Product_Form(instance=selected_product)
    }

    if request.method == 'POST':
        # print(request.POST)
        Product_form = Product_Form(request.POST, instance=selected_product)
        if Product_form.is_valid():
            Product_form.save()
            return redirect('/inventory/products/')

    return render(request, 'products.html', context)
