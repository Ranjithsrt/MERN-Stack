# input statement

"""
name = input("Enter your name: ")  # input eppoyum output str dhan
print(type(name))
print("Hello " + name)
"""
"""
a= input("Enter the value of a :") # str 10
b = input("Enter the value of b :") # str 20
c=a+b
print(type(a)) # str
print(c)  # str concat 1020
"""
"""
# type casting

   #int 10 [number]
a= int(input("Enter the value of a :") )# str 10
b =int( input("Enter the value of b :") )# str 20
c=a+b
print(type(a)) # int
print(c)  # int 30

"""
"""
   #float 10 [decimal]
a= float(input("Enter the value of a :") )# str 10.058887
b =float( input("Enter the value of b :") )# str 20.4777
c=a+b
print(type(a)) # float
print(c)  # float 35.85
"""
"""
# multiple inputs in single line

name1,name2,name3 = input("enter 3 names :").split()
print("Name 1 :" ,name1)
print("Name 2 :" ,name2)
print("Name 3 :" ,name3)
output:
enter 3 names : abc xyz srt
Name 1 : abc
Name 2 : xyz
Name 3 : srt


name1,name2,name3 = input("enter 3 names :").split(",")
print("Name 1 :" ,name1)
print("Name 2 :" ,name2)
print("Name 3 :" ,name3)
output:
enter 3 names : ranjith kumar, xyz singh, srt boy
Name 1 : abc
Name 2 : xyz
Name 3 : srt
"""

# multiline string

# a = """
# lorem100
#
# """
#
# print(type(a))
# print(a)


"""
para = ["25","12","100"]
print("|".jion(para))
#print("-",jion(para))

"""