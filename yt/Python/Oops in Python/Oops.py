# Programming paradigm:

"""
- is a style or way of thinking about writing and organizing code.

      1.imperative Programming
      2.declarative Programming
      3.object-oriented Programming
      4.functional Programming
      5.procedural Programming
      6.logical Programming

"""
# OOPS (Object Oriented Programming) :

"""
      class
      object

      inheritance
      polymorphism
      encapsulation
      abstraction

"""

# class :

"""
  - A Bluurprint or Template for creating objects.

  - it defines Attributes [data or (variables)] and Methods [functions]

  
syntax :

    class ClassName:
    
        # Body of class
            attributes
            methods

"""

# Example :

# Creating a class or declaring a class

"""
class Home:

# Attributes (data or variables)

    color = "white"
    num_rooms = 5
    num_bathrooms = 3

# Methods (functions)
    def Switch_on(self): #parameters
        print("Light is ON")


# Creating an Object or Instance of the class


"""

# Object :

"""
    - an object is an instance of a class.

syntax :

        object_name = ClassName()

"""

"""
Antila = Home() # Creating an object of class Home

print(Antila.color)  # Accessing attribute of the class using object
print(Antila.num_rooms)  # Accessing attribute of the class using object
[print(Antila.num_bathrooms)]  # Accessing attribute of the class using object
Antila.Switch_on()  # Calling method of the class using object

"""

# key concepts of OOPS :


# class :

"""
    - A Bluurprint or Template for creating objects.

    - think of it as a plan for building something.

    Example:

          CAR

"""

# Attributes :

"""
    These are the characteristics or properties of an object.

   - the car might have attributes like ,

    - color
    - model
    - year
    - WHEEL

    1 class Attributes : 

        - These are the attributes that are common to all objects of a class.
        - They are defined inside the class definition.


    2 instance Attributes : 

       - They are usally initialized in the constructor.
       - They are unique to each object of a class.

"""

# Methods :

"""
    - These are the actions that an object can perform.

    - they are like functions but belong to an object.

    Example:

        start() => to start the car
        stop() => to stop the car
        accelerate() => to increase the speed of the car
        brake() => to decrease the speed of the car

"""


# constructor : (__init__) => initialization method

"""
    - A special method that initializes the objects Attributes.

    - when the object is created 

    - it is called automatically

    when you create a new car object, you can give is a color and model the constructor initializes these values

    syntax :

        def __init__(self, parameters):

            # Body of constructor

"""

# self :


"""

     - self is a reference to the current instance of the class.

     - instance reference :

        it allows to each objects an actual car based on the blueprint car
 

"""


# objects :

"""
    - an object is an instance of a class.

    - it is a real world entity that has attributes and methods.

    - it can perform actions.

    syntax :

        object_name = ClassName(arguments)

"""

"""

class Car:

    # class Attributes
    wheels = 4  # common to all cars

    # constructor
    def __init__(self, color, model):
        # instance Attributes
        self.color = color
        self.model = model

    # Methods (functions)

    def Drive(self):
        print("Car is driving")

    def start(self):
        print("Car is starting")

    def stop(self):
        print("Car is stopping")

    def show_color(self):
        print("Car color is", self.color)
        print("Car model is", self.model)


# Creating objects of the class Car

Audi = Car("Red", "A4")
BMW = Car("Blue", "X5")

print(Audi.color)  # Accessing instance attribute
print(Audi.model)  # Accessing instance attribute
print(Audi.wheels)  # Accessing class attribute`

Audi.start()  # Calling method
Audi.Drive()  # Calling method


print(BMW.color)  # Accessing instance attribute
print(BMW.model)  # Accessing instance attribute
print(BMW.wheels)  # Accessing class attribute

BMW.start()  # Calling method
BMW.Drive()  # Calling method

"""


# inheritance :

"""
  - passing on features from one class to another.

  - in programming, allows one class to get attributes and method from another claass.

  - childrens inherting traits their parents

"""

# Example :

"""
class Animal:

    def Sound(self):
        print("Animal makes a sound")


class Dog(Animal):  # Dog class inherits from Animal class

    def Bark(self):
        print("Dog barks")

underDog = Dog()
underDog.Sound()  # Inherited method from Animal class

"""


# Types of Inheritance :

"""
    1. Single Inheritance
    2. Multiple Inheritance
    3. Multilevel Inheritance
    4. Hierarchical Inheritance
    5. Hybrid Inheritance

"""

# 1 single Inheritance :

"""
    - when a class inherits from a single parent class.

    Example :

        class Parent:
            # parent class code

        class Child(Parent):
            # child class code

"""

# Example :

"""

class Father:

    def car(self):
        print("father's car..!")


class Son(Father):

    def bike(self):
        print("son's bike..!")

vijay = Son() # Creating object of Son class

vijay.car() # Accessing inherited method from Father class
vijay.bike() # Accessing method from Son class

"""


# 2 Multiple Inheritance :

"""
    - when a class inherits from more than one parent class.

    Example :

        class Parent1:
            # parent1 class code

        class Parent2:
            # parent2 class code

        class Child(Parent1, Parent2):
            # child class code

"""


# Example :

"""

class Father:

    def car(self):
        print("father's car..!")


class Mother:

    def scooty(self):
        print("mother's scooty..!")


class Son(Father, Mother):

    def cycle(self):
        print("son's cycle..!")

Ajith = Son()

Ajith.car()    # Accessing inherited method from Father class
Ajith.scooty() # Accessing inherited method from Mother class
Ajith.cycle()  # Accessing method from Son class


# Example 2 :

class Phone:

    def call(self):
        print("Making a call...")

class Camera:

    def click(self):
        print("Clicking a photo...")

class Smartphone(Phone, Camera):

    def browse(self):
        print("Browsing the internet...")

smartphone = Smartphone()

smartphone.call()   # Accessing inherited method from Phone class
smartphone.click()  # Accessing inherited method from Camera class
smartphone.browse() # Accessing method from Smartphone class

"""


# 3 Multilevel Inheritance :

"""
    - when a class inherits from a parent class, which itself inherits from another parent class.

    Example :

        class Grandparent:
            # grandparent class code

        class Parent(Grandparent):
            # parent class code

        class Child(Parent):
            # child class code

"""

# Example :

"""

class Grandfather:
    def farm(self):
        print("grandfather's farm..!")

class Father(Grandfather):
    def car(self):
        print("father's car..!")

class Son(Father):
    def bike(self):
        print("son's bike..!")

class Daughter(Son):
    def doll(self):
        print("daughter's doll..!")

sk = Daughter()

sk.farm()  # Accessing inherited method from Grandfather class
sk.car()   # Accessing inherited method from Father class
sk.bike()  # Accessing inherited method from Son class
sk.doll()  # Accessing method from Daughter class
 
 """

# 4 Hierarchical Inheritance :

"""
    - when multiple classes inherit from a single parent class.

    Example :

        class Parent:
            # parent class code

        class Child1(Parent):
            # child1 class code

        class Child2(Parent):
            # child2 class code

"""

# Example :

"""
class father:

    def car(self):
        print("father's car..!")

class son(father):

    def bike(self):
        print("son's bike..!")

class daughter(father):
   def scooty(self):
        print("daughter's scooty..!")


suriya = son()

suriya.car()  # Accessing inherited method from father class
suriya.bike()  # Accessing method from son class

jyothika = daughter()

jyothika.car()  # Accessing inherited method from father class
jyothika.scooty()  # Accessing method from daughter class

 
"""

# Example 2 :

"""

class Bank:

    def services(self):
        print("Bank services available.")

class Loan(Bank):

   def offer_loan(self):
       print("Loan services available.")

class Savings_Account(Bank):

    def open_account(self):
        print("Savings account is available.")

personal_loan = Loan()
personal_loan.services()    # Accessing inherited method from Bank class

personal_loan.offer_loan()  # Accessing method from Loan class
savings_account = Savings_Account()
savings_account.services()      # Accessing inherited method from Bank class
savings_account.open_account()  # Accessing method from Savings_Account class


"""

# 5 Hybrid Inheritance :

"""
    - a combination of two or more types of inheritance.

    Example :

        class A:
            # class A code

        class B(A):
            # class B code

        class C(A):
            # class C code

        class D(B, C):
            # class D code

"""

"""

# Example :

class Product:

    def show_product(self):
        print("This is a product.")

class Electronics(Product):

    def show_electronics(self):
        print("This is an electronic product.")


class Clothing(Product):

    def show_clothing(self):
        print("This is a clothing product.")


class online_store(Electronics, Clothing):

    def show_store(self):
        print("Welcome to the online store.")
        
shop = online_store()

shop.show_product()      # Inherited method from Product class
shop.show_electronics()  # Inherited method from Electronics class
shop.show_clothing()     # Inherited method from Clothing class
shop.show_store()        # Method from online_store class


"""

