#  Types of Class Variables

"""
1. Class Variable
2. Instance Variable
3. Local Variable
4. Global Variable
"""

# instance variable


"""

class Phone:

    
    # instance variable inga samsung

    # samsung, samsung,50000,wireless
    def __init__(self, brand, price, chargetype):

        # samsung.brand = samsung
        # samsung.price = 50000
        # samsung.chargetype = wireless

        self.brand = brand
        self.price = price
        self.chargetype = chargetype

    def display(self):  # samsung
        print("brand : ", self.brand)  # samsung
        print("price : ", self.price)  # 50000
        print("chargetype : ", self.chargetype)  # wireless


samsung = Phone("samsung", 50000, "C-Type")
samsung.display()

redmi = Phone("redmi", 10000, "C-Type")
redmi.display()

google = Phone("google", 20000, "C-Type")
google.display()

"""

# class variable

"""
class Phone:

    # class variable
    chargetype = "C-Type"

    # samsung, samsung,50000,wireless
    def __init__(self, brand, price):

        # samsung.brand = samsung
        # samsung.price = 50000
 
        self.brand = brand
        self.price = price
 
    def display(self):  # samsung
        print("brand : ", self.brand)  # samsung
        print("price : ", self.price)  # 50000
        print("chargetype : ", self.chargetype)  # c-type

# phone.chargetype = wireless

samsung = Phone("samsung", 50000)
samsung.display()

redmi = Phone("redmi", 10000)
redmi.display()

google = Phone("google", 20000)
google.display()

"""