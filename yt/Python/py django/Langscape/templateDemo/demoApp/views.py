from django.shortcuts import render
from django.http import HttpResponse
import datetime

# simple text response
def check(request):
    return HttpResponse("This is the check page.")

# to render HTML template
def display(request):

    # bussiness logic

    message = "Hi"
    date = datetime.datetime.now()
    hour = int(date.strftime("%H"))

    if hour < 12:
        message = "Good Morning"
    elif hour < 17:
        message = "Good Afternoon"
    else:
        message = "Good Evening"

    context = {
        "display_date": date,
        "message": message
    }

    return render(request,'demoApp/abc.html', context)

  
"""

# dynamic data

def display(request):
    date = datetime.datetime.now()

    # dynamic data

    context = {
        "display_date": date,
        "name": "Ajith Kumar",
        "email": "ajith@example.com"
    }
    return render(request,'demoApp/abc.html', context)
                                               # pass data abc.html



"""