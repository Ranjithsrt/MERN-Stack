# while loop

i = 1  # initialize the variable
while i <= 10: # condition is true or false (10=10)
    print(i, end=" ")
    i += 1  # i = i + 1


# break
i = 1
while i <= 10:  # condition is true 
    print(i, end=" ")
    if i == 5: # 5 == 5 condition is false
        break  # break the loop and end the loop
    i += 1 #12345


# continue
i = 1
while i <= 10:  # condition is true
    i += 1  # i = i + 1
    if i == 5:  # 5 == 5 condition is false
        continue  # skip the current iteration and continue the loop
    print(i, end=" ") # 12 3 4  (5 skipped) 6 7 8 9 10


# else
i = 1
while i < 10:  # condition is true
    i += 1  # i = i + 1
    if i == 3:  # 5 == 5 condition is falsec
        continue
    print(i, end=" ")
else:  # condition is false
    print("i is no longer less than or equal to 10")