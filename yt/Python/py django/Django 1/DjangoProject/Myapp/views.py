from django.shortcuts import render , redirect

from Myapp.models import Datas

 
 
# Create your views here.

def home(request):  #127.0.0.1:8000/
             # get retrieve data
             data = Datas.objects.all()
             if(data!=""):
          #    if data.exists():
                    return render(request,'home.html',{'data':data}) # value irundha data homeku share pannum  (form with tabke show agum)
             else:
                    return render(request,'home.html')  # illa verum home page aa show pannum data illama  (form show agum)
             

# create data or save data in database
def addData(request): # 127.0.0.1:8000/addData
     if request.method == 'POST':
        name = request.POST['name'] # form name field name = name
        age = request.POST['Age']
        email = request.POST['Email']
        address = request.POST['Address']
        contact = request.POST['Contact']

      # create object
        obj = Datas(Name=name, Age=age, Email=email, Address=address, Contact=contact)
      # function call
        obj.save()

       # read data
        data = Datas.objects.all()
        return redirect('home') # refresh redirect home

     return render(request, 'home.html')  # data pass to home page 
 

def updateData(request,id): # 127.0.0.1:8000/updateData
     mydata = Datas.objects.get(id=id) 
     if request.method == 'POST':
        name = request.POST['name'] # form name field name = name
        age = request.POST['Age']
        email = request.POST['Email']
        address = request.POST['Address']
        contact = request.POST['Contact']

        mydata.Name = name
        mydata.Age = age
        mydata.Email = email
        mydata.Address = address
        mydata.Contact = contact

        mydata.save()
        return redirect('home')
     
     return render(request, 'update.html', {'data':mydata})

def deleteData(request,id): # 127.0.0.1:8000/deleteData
      # delete object
      data = Datas.objects.get(id=id)
      data.delete()
      return redirect('home')
