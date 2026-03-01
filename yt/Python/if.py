# if

"""
n = int(input("enter number :"))

if n%2 == 0:
    print(n, 'is even number')

"""
# if else

"""
name = input("enter number :")
age = int(input("enter age :"))


if age>=18:
    print(name, 'age is',age,"eligible for vote.")
else:
    print(name,"not eligble for vote")
"""

# else if

"""
0
1-5 0.5
5-10 1
10-30 5
> 30 membership cancel
"""
"""
days = int(input("enter the days :"))
if (days == 0):
    print("good no fine")
elif (days >= 1 and days <= 5):
    print("fine amount", days * 0.5)
elif (days >= 5 and days <= 10):
    print("fine amount", days * 1)
elif (days >= 10 and days <= 30):
    print("fine amount", days * 5)
else:
    print("membership cancel")
"""
# nested if
"""
mark list
tot
avg
res
if pass grade
  90-100 a
  80-89 b
  70-79 c
  else d
"""

m1 = int(input())
m2 = int(input())
m3 = int(input())

tot =m1+m2+m3
avg= tot/3.0

print("total:",tot)
print("avg:",avg)

if m1>=35 and m2>=35 and m3>=35:
    print("resuit : pass")
    if avg>= 90 and avg <=100:
        print("grade A")
    elif avg>= 80 and avg <=89:
        print("grade B")
    elif avg >= 70 and avg <= 79:
        print("grade C")
else:
    print("fail")
    print("grade : no grade ")