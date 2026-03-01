# Classes and Objects

# class

"""
syntax :

class ClassName:
    statements

"""

# creating a class
class goa:

    # class attributes
    name = ""
    drink = "" 

    # class methods
    def party(self): 
        print("let's party")

    def Beach(self):
        print("let's go to the beach")


# creating an object

ramesh = goa()
suresh = goa()

ramesh.name = "ramesh"
suresh.name = "suresh"

print(ramesh.name)
print(suresh.name)

ramesh.drink = "water"
suresh.drink = "coke"

print(ramesh.drink)
print(suresh.drink)

ramesh.party()
suresh.Beach()
 


 # Example

class laptop: 
   price = 0
   processor = ""
   ram = 0

hp = laptop()
hp.price = 50000
hp.processor = "i5"
hp.ram = 8

dell = laptop()
dell.price = 60000
dell.processor = "i7"
dell.ram = 16

lenovo = laptop()
lenovo.price = 70000
lenovo.processor = "i9"
lenovo.ram = 32

print(hp.price)
print(hp.processor)
print(hp.ram)

print(dell.price)
print(dell.processor)
print(dell.ram)

print(lenovo.price)
print(lenovo.processor)
print(lenovo.ram)
    
   
