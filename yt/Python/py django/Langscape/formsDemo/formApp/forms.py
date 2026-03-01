from django import forms

class EmployeeInfoForm(forms.Form):
    name = forms.CharField(label="Employee Name")
    salary = forms.IntegerField(label="Salary")
    email = forms.EmailField(label="Email")
    address = forms.CharField(widget=forms.Textarea)
    dob = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    age = forms.IntegerField()
