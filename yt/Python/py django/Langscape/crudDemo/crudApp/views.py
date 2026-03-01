from django.shortcuts import render,redirect

#connect db (models)

from crudApp.models import Student

from crudApp.forms import StudentForm

# Create your views here.

def retrieve_view(request):
    students = Student.objects.all()
    return render(request,'crudApp/index.html',{'students':students})

def create_view(request):
    #  form = Student  
    form = StudentForm()  
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/check')
    return render(request,'crudApp/create.html',{'form':form})


def delete_view(request,id):
    student = Student.objects.get(id=id)
    student.delete()
    return redirect('/check')

# def update_view(request,id):
#     student = Student.objects.get(id=id)
#     form = StudentForm(instance=student)
#     if request.method == 'POST':
#         form = StudentForm(request.POST,instance=student)
#         if form.is_valid():
#             form.save() 
#             return redirect('/check')
#     return render(request,'crudApp/update.html',{'form':form})  
