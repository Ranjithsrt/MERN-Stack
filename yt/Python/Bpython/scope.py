#global scope

name = "John" # global variable
def greeting():
    print(name)

greeting() # John
print(name) # John


#local scope

def greeting():
    name = "John" # local variable
    print(name) # John

greeting()
print(name) # NameError: name 'name' is not defined

# local scope argument

def greeting(name):
    name = "John" # local variable
    print(name) # John

greeting("Sally") # local variable
print(name) # NameError: name 'name' is not defined


 #

name = "John" # global variable

def greeting(name): # overwrite global variable 
    age = 20 # local variable
    print(age) # 20
    print(name) # John  local variable

greeting("Sally") # Sally
print(name) # John global variable

# function call another function
 
name = "John" # global variable

def another():
    age = 10 # global variable
    def greeting(name): # overwrite global variable 
      #  age = 20 # local variable
        print(age) # 20
        print(name) # John  local variable
        greeting("Share") # Share

another()
# greeting("subscribe")  ERROR