# Polymorphism

class Animal():
    def sound(self):
        print("Animal makes sound")

class Dog(Animal):
     def sound(self):
        print("Dog barks")

class bird(Animal):
    def sound(self):
        print("bird sings")

# al = Animal()
# al.sound()

# do = Dog()
# do.sound()

bi = bird()
bi.sound()