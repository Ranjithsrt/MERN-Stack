# Encapsulation

"""

1 Private members
2 Public members
3 Protected members

Private members: It is not accessible from outside the class.

Public members: It is accessible from outside the class.

Protected members: It is accessible within the class and its subclasses.

   - Hiding the object Which is to be Hidden
   - Hiding the implementation details
   
"""

class School:

    def __init__(self):
        self.name = "ABC School"
        self.place = "XYZ Road"
        #self.Revenue = 100000 # public
        #self.__revenue = 200000 # __private
        self._revenue = 300000 # _protected

    # def schoolrevenue(self):
    #     print("School Revenue:", self.__revenue)

    def __PrivateMethod(self):
        print("Private Method" + self.__revenue)

    def PublicMethod(self):
        print("Public Method")
        self.__PrivateMethod()

Scl = School()
print(Scl.name)
print(Scl.place)

#print(Scl.Revenue)
#print(Scl.__revenue)

#print(Scl.schoolrevenue())

print(Scl._School__revenue) # Accessing private member

Scl.PublicMethod()

 