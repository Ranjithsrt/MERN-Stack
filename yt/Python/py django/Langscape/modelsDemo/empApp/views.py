from django.shortcuts import render
#from django.http import HttpResponse
from empApp.models import Employee

# Create your views here.

def empDetails(request):
   # return HttpResponse("Hello, world. You're at the polls index.")
   emp_data = Employee.objects.all()
   emp_dict = {"emp_list":emp_data}
   return render(request,'empApp/employee.html',context=emp_dict)
