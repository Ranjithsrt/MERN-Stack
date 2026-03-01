# list

my_list = ["apple", "banana", "cherry"]
 
data = ["html", 100, True, 10.5]

print(my_list)

print("apple" in my_list)
print(data[1])
print(data[-1])

print(my_list.index("banana"))
print(my_list[0:2])
print(my_list[0:])
print(my_list[:2])
print(my_list[-3:-1])
print(my_list[-3:])

my_list[2:2] = ["kiwi", "mango"]
my_list[1:3] = ["kiwi", "mango"]

print(my_list)

print(len(my_list))

my_list.append("orange")

my_list+=["mango", "grapes"]

my_list.extend(["x", "y", "z"])

my_list.insert(0, "kiwi")

my_list.remove("banana")

my_list.pop()

del my_list[0]

my_list.clear()

my_list.reverse()

my_list.sort()

my_list.sort(reverse=True)

my_list.sort(key=str.lower)


my_list.count("apple")

my_list.copy()

print(my_list)
