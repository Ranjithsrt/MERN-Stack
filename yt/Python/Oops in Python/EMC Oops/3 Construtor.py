# Constructor

"""

Home - object
Blue print - class
worker - constructor


- A special method that is called when an object is created.

- It is used to initialize the attributes of the object.

- It is called automatically when an object is created.



"""


class Car:

    # common method's

    def __init__(self, color, model, year=None):  # parameters
        self.color = color
        self.model = model
        self.year = year

    def display(self):
        print(f"Color: {self.color}")
        print(f"Model: {self.model}")
        print(f"Year: {self.year}")

    def drive(self):
        pass


car1 = Car("Red", "Toyota")  # arguments pass to constructor
car2 = Car(year=2022, color="Blue", model="Honda")
car3 = Car("Black", "Suzuki", 2021)

car1.display()
car2.display()
car3.display()
