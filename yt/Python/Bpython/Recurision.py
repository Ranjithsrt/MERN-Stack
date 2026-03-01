# Recursion

# oru function ulla adhe function call panrathu

def add_one(num): # 0 param

    if(num>=9): # 0 >= 9 False | 10 >= 9 True
        return num+1 # 10
    total = num+1 # 0+1 = 1
    print(total) # 1
                    #1
    return add_one(total) # call recursion add_one(1)

mynewtotal = add_one(0) # 0 arg
print(mynewtotal) # 12345678910



# program to print factorial of a number
# recursively

def factorial(n):   # 6 # 5 # 4 # 3 # 2 # 1
    if n == 1: # 1 == 1 True | 2 == 1 False
        return 1
    else:
        return n * factorial(n-1) # 6*factorial(6-1) # 5
 
# user input
num = 6  # 6!=6×5×4×3×2×1=720

 # check if the number is valid or not

if num < 0:
    print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
    print("The factorial of 0 is 1")
else:
    print("The factorial of", num, "is", factorial(num))    
