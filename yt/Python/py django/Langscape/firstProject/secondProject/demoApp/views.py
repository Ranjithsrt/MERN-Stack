from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def gm_view(request):
    return HttpResponse("Good Morning")

def ge_view(request):
    return HttpResponse("Good Evening")

def gn_view(request):
    return HttpResponse("Good Night")
 