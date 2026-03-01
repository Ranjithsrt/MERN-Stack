# function

def my_function():
    print("Hello from a function")

my_function() # Hello from a function


# function with parameter and argument

def sum(a,b):
    print(a+b)

sum(1,2)

# function with return

def sum(a,b):
    return a-b

print(sum(1,2))# 3


def sum(a,b):
    return a*b
 
tot = sum(4,3)
print(tot) # 12
 

# default parameter value

def my_function(country = "Norway"):
    print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")


# multiple arguments

def my_function(*kids): 
    print("My youngest child is " + kids[0])
    print("My middle child is " + kids[1])
    print("My oldest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")


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
