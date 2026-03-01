from django.shortcuts import render

# import HttpResponse
from django.http import HttpResponse

# Create your views here.

# function - res
def wish(request):
 return HttpResponse("Hi Buddy ..How are you ?")