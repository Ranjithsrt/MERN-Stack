# introduction to OOPS in python

"""
introduction object oriented Approach

   - feature of the oops
   - phase of the oops

   state - attributes/properties of the object (nouns)
   Ex : name, color, size, age

   behavior - methods/functions of the object (verbs)
   Ex : speak, run, eat, sleep

"""

# Example

# repeative code


name = "lion"
color = "golden"

Name = "peacock"
Color = "blue"

print(name)
print(color)
print(Name)
print(Color)


# oops concept (Reusability of code)


class Animal:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def speak(self):
        print(f"The {self.name} says hello!")


# creating objects
lion = Animal("lion", "golden")
peacock = Animal("peacock", "blue")

# accessing object properties and methods

print(lion.name)
print(lion.color)
lion.speak()

print(peacock.name)
print(peacock.color)
peacock.speak()

"""
 object oriented methodology

    - object orientation is a software development methodology that is based on modeling a real-world system.

    - An object-orientd program consists of classes and objects.

The foundation of OOPS

    - An object means a "materiak thing" that is capable of being presented to the sense.

    - An object has the following characteristics:

        1. State: It represents the data/attributes of the object.

        2. Behavior: It represents the functionality/methods of the object.

        3 it has a state - The object's state is determined by the values of its properties/attributes.

        4 it may display behavior - The object's behavior is determined by the operatioms that it provides.


"""

"""
object oriented programming principles

    1. Reusability modelling
    2 .Reusability code
    3. flexibility to change
    4. Existence as different forms
    5. data hiding
    6. real world modelling
    7. easy to maintain
    8. easy to understand
    9. faster development
    10. security


"""

"""

characteristics of OOPS

    1. Encapsulation
    2. Abstraction
    3. Inheritance
    4. Polymorphism

"""
