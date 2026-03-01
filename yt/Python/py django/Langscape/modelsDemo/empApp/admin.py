from django.contrib import admin

# Register your models here.

# import models
from empApp.models import Employee

class EmployeeAdmin(admin.ModelAdmin):
    emp_details = ['empNo','empName','empSalary','empAddress']
    
admin.site.register(Employee,EmployeeAdmin)
