# function

def my_function():
    print("Hello from a function")

my_function()

# function with parameter

def my_function(fname, lname):
    print(fname + "..!")

my_function("Emil", "GT")
my_function("Tobias","Csk")
my_function("Linus","RCB")

# function with return value

def my_function(x):
    return 5 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))

def my_function(a, b):
    return a + b

tot = my_function(4, 3)
print(tot)

# default parameter value

def my_function(country = "Norway"):
    print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")


# multiple arguments

def my_function(*kids):
    print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")

def add(*num):
    sum = 0
    for i in num:
        sum = sum + i
    print("Sum:", sum)

add(1, 2, 3)

# keyword arguments
def my_function(**kwargs):
    print(kwargs)
    print(type(kwargs))

my_function(first="Emil", mid="Tobias", last="Linus")


# keyword arguments

def my_function(**kids):
    print(kids)
    print("My youngest child is " + kids["child1"])
    print("My middle child is " + kids["child2"])
    print("My oldest child is " + kids["child3"])
    

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")


# arbitrary arguments 
def func(a,b,*args,option="False",**kwargs):

    print("a =", a)
    print("b =", b)
    print("args =", args)
    print("option =", option)
    print("kwargs =", kwargs)

func(1,3,10,20,Name="John",salary=5000)


    

 