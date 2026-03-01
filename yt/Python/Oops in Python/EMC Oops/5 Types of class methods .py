# Types of class methods 


class laptop:

    # class variable
    chargertype = "C Type"

    # self - instance method

    def __init__(self):
        self.brand = ""
        self.price = 35

    def setprice(self, price):
        self.price = price

    def getprice(self):
        print(self.price)

    @classmethod
    def changechargertype(cls):
        cls.chargertype = "B Type"
        print("chargertype changed to B")

    @staticmethod
    def info():
        print("This is a static method")



hp = laptop()
hp.setprice(50000)
hp.getprice()


laptop.changechargertype()
 

hp.info()