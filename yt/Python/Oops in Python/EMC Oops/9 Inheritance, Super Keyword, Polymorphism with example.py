# Inheritance, Super Keyword, Polymorphism with example


# Example 1

class shape():
    def area(self):
        return 0


class rectangle(shape):
    def area(self):
        l = 10
        b = 20
        print(l * b)

# Example 2

class person():
    def __init__(self, name):
        self.name = name
class student(person):
    def __init__(self,name, grade):
        super().__init__(name) # `super()` is used to call the parent class constructor
        self.grade = grade

    def display(self):
        print(self.name)
        print(self.grade)

s1 = student("ramesh","A")
s1.display()



# Example 3


class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        # Call the parent class constructor
        super().__init__(name, salary)
        self.department = department

    def display(self):
        print("Name:", self.name)
        print("Department:", self.department)
        print("Salary:", self.salary)

# Create object
m1 = Manager("Ramesh", 10000, "IT")
m1.display()
