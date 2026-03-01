from django.shortcuts import render
from django.http import HttpResponse

# import datetime
import datetime

# Create your views here.
def tellMeTime(request):
    time = datetime.datetime.now()
    result = "The time is " + str(time)
    return HttpResponse(result)
