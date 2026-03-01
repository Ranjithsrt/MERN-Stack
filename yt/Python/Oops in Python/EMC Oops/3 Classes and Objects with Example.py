# Example 1
class student:
    def __init__(self):
        self.name = ""
        self.regno = 0

    def display(self):
        print("name : ",self.name)
        print("regno : ",self.regno)

s1 = student()
s2 = student()

s1.name = "ramesh"
s1.regno = 1

s2.name = "suresh"
s2.regno = 2

s1.display()
s2.display()


# Example 2


class fruit:
    def __init__(self,color): # apple,red
         self.color = color

    def display(self):
         print("color : ",self.color)

apple = fruit("red") # apple red
banana = fruit("yellow") # banana yellow

# apple.color = "red"
# banana.color = "yellow"

apple.display()
banana.display()



# Example 3

class Teacher:
    def __init__(self,name,subject):
        self.name = name  # t1.name = ramesh
        self.subject = subject # t1.subject = java

    def display(self):
        print("name : ",self.name)
        print("subject : ",self.subject)

t1 = Teacher("ramesh","python")
t2 = Teacher("suresh","java")

t1.display()
t2.display()


# Example 4

class calculator:
    def __init__(self,a,b):
        self.num1 = a
        self.num2 = b
    def add(self):
        print(self.num1 + self.num2)
    
    def sub(self):
        print(self.num1 - self.num2)

    def mul(self):
        print(self.num1 * self.num2)

    def div(self):
        print(self.num1 / self.num2)

    

c1 = calculator(10,20)
c1.add()
c1.sub()
c1.mul()
c1.div()
        
        
    