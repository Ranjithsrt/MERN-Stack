from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def one(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def two(request):
    return HttpResponse("Hello ")

def three(request):
    return HttpResponse("Hello, world. ")

def four(request):
    return HttpResponse("  You're at the polls index.")

def five(request):
    return HttpResponse("Hello, world. You're at .")

