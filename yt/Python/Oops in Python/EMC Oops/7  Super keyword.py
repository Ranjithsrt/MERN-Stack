# Super keyword


class a():
    def __init__(self):
        print("A")
    def display(self):
        print("A display")

class b(a):
    def __init__(self):
        super().__init__() #`super()` is used to call the parent class constructor
        print("B")
    def display(self):
        super().display()
        print("B display")

class c(a,b):
    def __init__(self):
        super().__init__() #`super()` is used to call the parent class constructor
        print("C")
    def display(self):
        super().display()
        print("C display")

obj = b()
obj.display()

obj = c()
obj.display()