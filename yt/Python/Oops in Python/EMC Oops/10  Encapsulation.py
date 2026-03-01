#  Encapsulation


class company():
    def __init__(self):
        self.__companyName = "Google" # private variable
        self._company = "Google" # protected variable
        self.company = "Google" # public variable





    def companyName(self):
        print(self.__companyName)

c1 = company()
c1.companyName()

# c1.company = "Facebook"
# print(c1.__companyName) # private variable
# print(c1._company) # protected variable
# print(c1.company) # public variable

        
    
