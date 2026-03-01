# for loop

"""
for i in range(6):
    print(i)


for x in range(6,10):
    print(x)

for x in range(2,20,2):
    print(x)


for i in range(0,21,2):
    print(i)

for i in range(5):
    a=int(input())
    b=int(input())
    print(a+b)


"""

# nested for loop

"""
for i in range(6):
    for j in range(i):
        print("*",end="")
    print("")

 
for i in range(6,0,-1):
    for j in range(i):
        print("*",end="")
    print("")

for i in range(65,70,1):
    for j in range(65,70,1):
        print(chr(j),end="")
    print("")
"""


# while else and for else
"""
i=1
while i<=5:
      # if(i==4):
       #    break
    print(i)
    i+=1
else:
    print("loop completed")


i=1
for i in range(1,21):
    # if(i==5):
    #     break
    print(i)
    i+=1
else:
    print("for loop completed")

"""