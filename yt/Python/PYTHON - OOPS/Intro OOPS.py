# Introduction to OOPS

"""

Name = "Lion"
color = "Yellow"

name = "tiger"
color = "Red"

_Name = "cheetah"
_Color = "black"

print(name)
print(color)


""" ""

"""

class Animal:
    def __init__(self,name,color):
        self.name = name
        self.color = color

    def printAnimal(self):
        print(self.name)
        print(self.color)

lion = Animal("Lion","Yellow")
lion.printAnimal()


tiger = Animal("Tiger","Red")
tiger.printAnimal()


cheetah = Animal("Cheetah","Black")
cheetah.printAnimal()

"""

"""
def A():
    pass
    
def B():
    pass

def C():
    pass
    
inheritance A to B only 


"""

# class and object

# class -> blueprint -> template
# object -> real world entity -> instance

"""

static -> noun             behavior -> verb

name                        ranjith

age                          20

height                       5.5

weight                        60


human 1 -> ranjith          human 2 -> vijay

human 3 -> ajith            human 4 -> sk

"""

"""
# dictionary or object

human1 = {"name":"ranjith","age":20,"height":5.5,"weight":60}
human2 = {"name":"vijay","age":20,"height":5.5,"weight":60}
human3 = {"name":"ajith","age":20,"height":5.5,"weight":60}
human4 = {"name":"sk","age":20,"height":5.5,"weight":60}
human5 = {"name":"sk","age":20,"height":5.5,"weight":60}
human6 = {"name":"sk","age":20,"height":5.5,"weight":60}
human7 = {"name":"sk","age":20,"height":5.5,"weight":60}
human8 = {"name":"sk","age":20,"height":5.5,"weight":60}
human9 = {"name":"sk","age":20,"height":5.5,"weight":60}
human10 = {"name":"sk","age":20,"height":5.5,"weight":60}

print(human1)
print(human2)
print(human3)
print(human4)
print(human5)
print(human6)
print(human7)
print(human8)
print(human9)
print(human10)

"""

# self -> self is a keyword in python which is used to represent the current object itself in python OOPS programming language

"""
class Human:
    def __init__(self,name,age,height,weight):
        self.name = name
        self.age = age
        self.height = height
        self.weight = weight

    def printHuman(self):
        print(self.name)
        print(self.age)
        print(self.height)
        print(self.weight)


humanX = Human()

humanX.name = "XXX"
humanX.age = 1
humanX.height = 2
humanX.weight = 3

print(humanX.name)
print(humanX.age)
print(humanX.height)
print(humanX.weight)


humanY = Human()

humanY.name = "YYY"
humanY.age = 1
humanY.height = 2
humanY.weight = 3

print(humanY.name)
print(humanY.age)
print(humanY.height)
print(humanY.weight)


human1 = Human("ranjith",20,50.100,10)
human1.printHuman()

human2 = Human("vijay",20,15.25,30)
human2.printHuman()

human3 = Human("ajith",50,45.55,70)
human3.printHuman()

human4 = Human("sk",10,20,35,90)
human4.printHuman()

"""

# Constructor - Session 3 - Python - Tamil

"""

class Person:
    # init -> initialize -> constructor
    def __init__(self,name,age,height,weight = None): # parameters

        
        
        self.name = "ranjith"
        self.age = 20
        self.height = 50.100
        self.weight = 10

        self.name = "vijay"
        self.age = 20
        self.height = 15.25
        self.weight = 30

        self.name = "ajith"
        self.age = 50
        self.height = 45.55
        self.weight = 70

        
        self.name = name
        self.age = age
        self.height = height
        self.weight = weight

    def printPerson(self):
        print(self.name)
        print(self.age)
        print(self.height)
        print(self.weight)

# object creation

# obj Name = ClassName()
person1 = Person("ranjith",20,50.100,10)  # person1 -> object
person1.printPerson()

person2 = Person("vijay",age=20,height=50,weight=15) # person2 -> object
person2.printPerson()

person3 = Person("ajith",50,45.55,70) # person3 -> object
person3.printPerson()

person4 = Person("sk",10,20,35,90) # person4 -> object
person4.printPerson()

"""

# Static vs Instance - Session 4 - Python - Tamil

# Static -> class variable -> constant por standard
# Instance -> object variable

"""

class Person:
    # class variable
    sleepingtime = 8

    def __init__(self, name, age):
        # instance variable
        self.name = name
        self.age = age
        self.sleepingtime = 10

    # static method
    @staticmethod
    def Sleep():
        print("person should sleep for", Person.sleepingtime, "hours")
    
    # class method
    @classmethod
    def Eat(cls):
        print("person should eat for", cls.sleepingtime, "hours")


p1 = Person(name="ranjith", age=20)

# instance variable
print(p1.sleepingtime)  # 10
# class variable
print(Person.sleepingtime)  # 8

# static method
Person.Sleep()

# class method
Person.Eat()

"""

# Inheritance Part 1 - Session 5 - Python - Tamil

"""
parent class -> base class
  
child class -> derived class

"""

"""

# single level inheritance

class Parent:

    def __init__(self):
       self.networth = 100000000
    def Sing(self):
        print("parent is singing")

class Child(Parent):
    def Dance(self):
        print("child is dancing")

p1 = Parent()
p1.Sing()
print(p1.networth)


c1 = Child()
c1.Sing()
c1.Dance()

print(c1.networth)


# multilevel inheritance

class GrandParent:
    def __init__(self):
        self.networth = 100000000
    def Sing(self):
        print("grandparent is singing")

class Parent(GrandParent):
    def Dance(self):
        print("parent is dancing")

class Child(Parent):
    def Play(self):
        print("child is playing")

gp1 = GrandParent()
gp1.Sing()
print(gp1.networth)

p1 = Parent()
p1.Sing()
p1.Dance()
print(p1.networth)

c1 = Child()
c1.Sing()
c1.Dance()
c1.Play()
print(c1.networth)





# multiple inheritance




class GrandParent:
    def __init__(self):
        self.networth = 100000000
    def Sing(self):
        print("grandparent is singing")

class Parent():
    def Dance(self):
        print("parent is dancing")

class Child(Parent,GrandParent):
    def Play(self):
        print("child is playing")

gp1 = GrandParent()
gp1.Sing()
print(gp1.networth)

p1 = Parent()
p1.Sing()
p1.Dance()
print(p1.networth)

c1 = Child()
c1.Sing()
c1.Dance()
c1.Play()
print(c1.networth)




# hierarchial inheritance


class GrandParent:
    def __init__(self):
        self.networth = 100000000
    def Sing(self):
        print("grandparent is singing")

class Parent(GrandParent):
    def Dance(self):
        print("parent is dancing")

class Child(GrandParent):
    def Play(self):
        print("child is playing")

gp1 = GrandParent()
gp1.Sing()
print(gp1.networth)

p1 = Parent()
p1.Sing()
p1.Dance()
print(p1.networth)

c1 = Child()
c1.Sing()
c1.Play()
print(c1.networth)


# Hybrid inheritance


class GrandParent:
    def __init__(self):
        self.networth = 100000000
    def Sing(self):
        print("grandparent is singing")

class Relative(GrandParent):
    def Dance(self):
        print("relative is dancing")

class Parent(GrandParent):
    def Play(self):
        print("parent is playing")

class Child(Parent,Relative):
    def Play(self):
        print("child is playing")

gp1 = GrandParent()
gp1.Sing()
print(gp1.networth)

r1 = Relative()
r1.Sing()
r1.Dance()
print(r1.networth)

p1 = Parent()
p1.Sing()
p1.Play()
print(p1.networth)

c1 = Child()
c1.Sing()
c1.Play()
print(c1.networth)


 """

# Encapsulation - Session 7 - Python - Tamil

"""
public
_protected
__private

Hiding the object which is to be hidden

"""

"""

class School:
    def __init__(self):

        # public variable

        self.name = "ABC school"
        self.Place = "Chennai"

        # __private variable access not possible from outside the class object but possible from inside the class

        self.__Revenue = 100000000 #private variable

        # protected variable

        self._marks = 100

        # private method
        def __PrivateMethod(self):
            print("private method") 

        def PublicMethod(self):
            print(self.__PrivateMethod()) # 100000000

    def printSchool(self):
        print(self.name)
        print(self.Place)
        print(self.__Revenue) # 100000000


s1 = School()
s1.PublicMethod()
s1.printSchool()

"""

# Getter & Setter - Session 8 - Python - Tamil

"""

class Person:
    def __init__(
        self,
    ):  # parameters
        self.__name = None

    # setter
    def SetName(self, name):
        if len(name) < 3:
            print("invalid name")
        else:
            self.__name = name

    # getter
    @property
    def Name(self):
        return self.__name

    # setter

    @Name.setter
    def Name(self, name):
        if len(name) < 3:
            print("invalid name")
        else:
            self.__name = name

    # getter
    def GetName(self):
        if self.__name == None:
            return "no name"
        return self.__name


# outside the class
p1 = Person()

p1.Name = "ranjith"  # setter ranjith
print(p1.Name)  # get ranjith

p1.SetName("ranjith")  # setter ranjith
print(p1.GetName())  # get ranjith


"""
#Polymorphism - Session 9 - Python - Tamil
