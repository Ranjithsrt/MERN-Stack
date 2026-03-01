
Mytuble = tuple(("apple", "banana", "cherry"))
mytuble = ("apple", "banana", "cherry")

newlist = list(mytuble)
newlist[1] = "kiwi"
newlist.append("orange")
mytuble = tuple(newlist)# Convert the list back to a tuple

print(mytuble)