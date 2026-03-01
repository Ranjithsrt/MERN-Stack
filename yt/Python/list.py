# list in python

"""
sequence type  vaarisaiyaa irukkum
mutable   value changeable
"""


a = [1,2,3,4,5]
print(a)
print(type(a))

#mutable

a[0]=100
print(a)

a[4] = 500
print(a)

# slice

print(a[1])
print(a[-1])
print(a[0:3])
print(a[2:])
print(a[:3])

# mix data

b=[1,True,"ram",2.55,[1,2,3,4.5],{}]
print(b)
print(type(b))
print(b[0],"type is",type(b[0]))
print(b[1],"type is",type(b[1]))
print(b[2],"type is",type(b[2]))
print(b[3],"type is",type(b[3]))
print(b[4][1])
print(b[4][3])
print(b[-1])

# list fun

c=[1,True,"ram",2.55,[1,2,3,4.5],{}]
c.clear()
print(c,"clear c")

c=[1,True,"ram",2.55,[1,2,3,4.5],{}]
b=c.copy()
print(b,"b copy")

d=[1,True,"ram",2.55,25,25]
print(d.count(25))

print(d.index(25))
print(len(d))
print(max(d))
print(min(d))


d.pop(0) # remove element using index
d.remove(25)  #  values


names = ["ram"]
names.append("ravi")
names.append("kumar")
names.append("ranjith")
print(names)

names2 =["sara"]
names.extend(names2)
print(names)

names.insert(0,"suriya")
print(names)

print(list(range(5)))
print(list("Tutor joe's"))

names.sort()
names.sort(reverse=True)
names.sort(key=len)
print(names)




