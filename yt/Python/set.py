
"""
unorderd
duplicate value not allowed
"""

names = {"ram","sam","vam"}
print(names)
print(type(names))

# for loop

for name in names:
    print(names)

# add new ele

names.add("sara")
print(names)

# upate znother set of data

a= {"kumar0","abc","xyz"}
names.update(a)
print(names)

names.remove("sara")
print(names)

names.discard("sara")
print(names)


names.pop()
print(names)

names.clear()

del names

a={1,1,2,2,3}
print(a)

a={1,1,2,2,3}
b={'a','b','c'}
c=a.union(b)
print(c)

a.update(b)

z=a.intersection(b)
print(z)

a.isdisjoint(b)

v=a.symmetric_difference(z)
n= a.symmetric_difference_update(z)

c=a.isdisjoint(b)

c=a.issuperset(b)

c=a.issuperset(b)