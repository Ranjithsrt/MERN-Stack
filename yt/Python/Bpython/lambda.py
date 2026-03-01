
# lambda function (anonymous function)

x = lambda a : a * 10
print(x(5)) # Output: 50

# lambda function with two numbers

x = lambda a, b : a * b
print(x(5, 6)) # Output: 30

# lambda function with default value

x = lambda a, b = 10 : a * b
print(x(5)) # Output: 50

# lambda function with return 

def functionBuilder(x):
    return lambda a : a + x

f = functionBuilder(10)
f = functionBuilder(10)

print(f(5))# Output: 15
print(f(20))# Output: 30


# Higher Order Function

# map

numbers = [1, 2, 3, 4, 5]
 
squared_numbers = map(lambda x: x * x, numbers)
 
print(list(squared_numbers))

# filter

numbers = [1, 2, 3, 4, 5]
 
even_numbers = filter(lambda x: x % 2 == 0, numbers)
 
print(list(even_numbers))
 

Numbers = [1, 2, 3, 4, 5]
 
odd_numbers = filter(lambda x: x % 2 == 1, Numbers)
 
print(list(odd_numbers))

# reduce

from functools import reduce

numbers = [1, 2, 3, 4, 5]
                            # param   add    list 
sum_of_numbers = reduce(lambda x, y: x + y, numbers)

print(sum_of_numbers)


# reduce names

from functools import reduce

names = ["ram","sam","vam"]
                            # param   add    list 
sum_of_names = reduce(lambda x, y: x + y, names)

print(sum_of_names)