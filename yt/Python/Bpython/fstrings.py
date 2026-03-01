# f strings

# concat

person = "Ranjith"
coins = 3

print("\n"+ person + " has " + str(coins) + " coins")


# %s string

print("\n%s has %s coins" % (person, coins))


# string .format()

print("\n{} has {} coins".format(person, coins))

print("\n{1} has {0} coins".format(person, coins))

print("\n{person} has {coins} coins".format(person=person, coins=coins))

 
 # dictionary

person = "Ranjith"
coins = 3

print("\n{person} has {coins} coins".format(person=person, coins=coins))


# f strings

print(f"\n{person} has {coins} coins")

# operator

print(f"\n{person} has {2*5} coins")

# lower

print(f"\n{person.lower()} has {2*5} coins")

# upper

print(f"\n{person.upper()} has {2*5} coins")

# title

print(f"\n{person.title()} has {2*5} coins")

# formatting 

num = 3.14159

print(f"\n{person} has {2*5} coins {num:.2f}") # 3.14 decimal places

# for loop

for i in range(1, 11):
    print(f"\n{person} has {2*5} coins {num:.2f} {i}")# 3.14 decimal places

 




