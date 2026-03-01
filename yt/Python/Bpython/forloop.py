# for loop

fruits = ["apple", "banana", "cherry"]

for x in fruits: # iterate the list
    print(x)

# string

for x in "banana": # iterate the string
    print(x)


# break
fruits = ["apple", "banana", "cherry"]

for x in fruits: # iterate the list
    print(x)
    if x == "banana": # banana == banana
        break   # break the loop
    
    
# continue

fruits = ["apple", "banana", "cherry"]

for x in fruits: # iterate the list
    if x == "banana":
        continue  # skip the current iteration and continue the loop
    print(x) # skip the banana
 
  
  # range

for x in range(6): # iterate the range
    print(x) # 0 1 2 3 4 5

            # start, stop, 
for x in range(2,6): # iterate the range
    print(x) # 2 3 4 5
    
             # start, stop, step
for x in range(2,10,2): # iterate the range
    print(x) # 2 4 6 8


# nested loop

adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x,y)
