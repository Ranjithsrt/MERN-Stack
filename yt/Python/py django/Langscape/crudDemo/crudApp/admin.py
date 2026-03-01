from django.contrib import admin
from crudApp.models import Student

# Register your models here.

class StudentAdmin(admin.ModelAdmin):
    list = ['sno', 'sname', 'sclass', 'saddress'] # enna ena venum ithu dhan nanga ude paanuvom.

admin.site.register(Student, StudentAdmin)
                        # connection