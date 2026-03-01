# class and objects


"""

World laa irukaa Ellamey object.

mutliple objects aa common na oru propertie share panni irundha athu class.


         class  (God)  Blueprint/Template

object A       object B    object C
(Human 1)      (Human 2 )     (Human 3)

state/properties/attributes: height, weight, color, name, age

behaviors/methods: talk(), walk(), eat()



"""

# Example

human1 = {
    "name": "Arun",
    "age": 20,
    "color": "brown",
    "height": 5.8,
    "weight": 70,
    "talk": lambda: "Hello, I am Arun",
    "walk": lambda: "I am walking",
    "eat": lambda: "I am eating",
}

human2 = {
    "name": "Bala",
    "age": 20,
    "color": "black",
    "height": 5.8,
    "weight": 70,
    "talk": lambda: "Hello, I am Bala",
    "walk": lambda: "I am walking",
    "eat": lambda: "I am eating",
}

human3 = {
    "name": "Chitra",
    "age": 20,
    "color": "white",
    "height": 5.8,
    "weight": 70,
    "talk": lambda: "Hello, I am Chitra",
    "walk": lambda: "I am walking",
    "eat": lambda: "I am eating",
}


"""

syntax:

class ClassName:
    # properties
    # methods

    class is keyword , so it should be always in  lowercase

    it is colon(:) at the end of class declaration

"""


# Blueprint / Template
class Human:
    # properties
    name = "Unknown"
    age = 0
    color = "Unknown"
    height = 0.0
    weight = 0.0

    # methods
    def talk(self):  # self is a reference to the current instance
        return f"Hello, I am {self.name}"

    # human1.Arun => human1.talk () => Hello, I am Arun
    # human2.Bala => human2.talk () => Hello, I am Bala
    # human3.Chitra  => human3.talk () => Hello, I am Chitra

    def walk(self):  # self object aa act pannum
        return "I am walking"

    def eat(self):
        return "I am eating"


# creating objects
human1 = Human()
human2 = Human()
human3 = Human()

# accessing properties and methods
human1.name = "Arun"
human1.age = 20
human1.color = "brown"
human1.height = 5.8
human1.weight = 70

print(human1.name)
print(human1.age)
print(human1.color)
print(human1.height)
print(human1.weight)

print(human1.talk())  # Output: Hello, I am Arun
print(human1.walk())  # Output: I am walking
print(human1.eat())  # Output: I am eating

human2.name = "Bala"
human2.age = 22
human2.color = "black"
human2.height = 5.8
human2.weight = 70

print(human2.name)
print(human2.age)
print(human2.color)
print(human2.height)
print(human2.weight)

print(human2.talk())  # Output: Hello, I am Bala
print(human2.walk())  # Output: I am walking
print(human2.eat())  # Output: I am eating

print(human3.name)
print(human3.age)
print(human3.color)
print(human3.height)
print(human3.weight)

human3.name = "Chitra"
human3.age = 24
human3.color = "white"
human3.height = 5.8
human3.weight = 70

print(human3.talk())  # Output: Hello, I am Chitra
print(human3.walk())  # Output: I am walking
print(human3.eat())  # Output: I am eating


"""
class Student:
    def __init__(self, name, age, Tamil, English, Maths, Science, Social):
        self.name = name
        self.age = age
        self.Tamil = Tamil
        self.English = English
        self.Maths = Maths
        self.Science = Science
        self.Social = Social

    def avg(self):
        return (self.Tamil + self.English + self.Maths + self.Science + self.Social) / 5

    def percentage(self):
        return (self.Tamil + self.English + self.Maths + self.Science + self.Social) / 500 * 100

    def get_grade(self):
        average = self.avg()
        if average >= 90:
            return "A"
        elif average >= 80:
            return "B"
        elif average >= 70:
            return "C"
        elif average >= 60:
            return "D"
        else:
            return "F"


# Create student objects
student1 = Student("Arun", 20, 100, 100, 100, 100, 100)
student2 = Student("Bala", 22, 90, 90, 90, 90, 90)
student3 = Student("Chitra", 24, 80, 80, 80, 80, 80)

# Print details
for s in [student1, student2, student3]:
    print(f"\nStudent: {s.name}, Age: {s.age}")
    print(f"Average: {s.avg():.2f}")
    print(f"Percentage: {s.percentage():.2f}%")
    print(f"Grade: {s.get_grade()}")

    """
