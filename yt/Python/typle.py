
# tuble in python

# immutable

# surrounded by round brackets

a = (1,2.5,3,True,"Ram")
print(a)
print(a[0])
print(a[-1])
print(a[0:2])
print(type(a))

b=list(a)
print(b)

b.append("raja")
print(b)
print(type(b))

a = tuple(b)
print(a)
print(type(a))

#loop

for i in a:
    print(i)

if "raja" in a :
    print("rsaja irukku")
else:
    print("not found")

print(len(a))


x=(1)
print(x) #int

x= (1,)
print(x) #tublr

del x

x = (1,2,3,1)
y =(5,6,7)
z = x+y
print(z)
print(x.count(7))

# nested tuble

t = (x,y)
print(t)
print(t[0])
print(t[1])

print(t[0][1])

print(t[1][3])

x = ("abc",) * 10
print(x)

print(min(a))
print(max(a))