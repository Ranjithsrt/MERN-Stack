#  Constructor and Self Keyword

class laptop:

    # constructor 

    """
    A  constructor is a unique function that gets called automatically when an object is created of a class.

    """
    def __init__(self): # hp  # dell
        self.price = 0  # hp.price  # dell.price
        self.processor = "" # hp.processor  # dell.processor
        self.ram = 0 # hp.ram  # dell.ram
     
    def display(self): # hp
        print("price : ",self.price) # hp.price
        print("processor : ",self.processor) # hp.processor
        print("ram : ",self.ram) # hp.ram

hp = laptop() # call constructor automatically # hp

hp.price = 50000
hp.processor = "i5"
hp.ram = 8

dell = laptop() # dell

dell.price = 60000
dell.processor = "i7"
dell.ram = 16

hp.display() # hp.display(hp)
dell.display() # dell.display(dell)