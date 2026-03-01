from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'OrderMangement/home.html')


def about(request):
    return render(request, 'OrderMangement/about.html')

def contact(request):
    return render(request, 'Front_End/contact.html')

def service(request):
    return render(request, 'Front_End/service.html')


