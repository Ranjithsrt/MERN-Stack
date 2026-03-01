from django.shortcuts import render
from . import forms

# Create your views here.

def empDetailsView(request):
    form = forms.EmployeeInfoForm()
    empInfo = { 'form': form }   
    return render(request,'formApp/input.html', context=empInfo)