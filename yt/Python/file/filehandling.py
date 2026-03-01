
# file open

f=open("fruits.txt")
print(f)

# view content
f=open("fruits.txt")
content = f.read()
print(content)

# write

f= open("fruits.txt","w") # override new value vaa store pannum
f.write("banana\n")
f.write("mango")
f.close()

# read

f= open("fruits.txt","r")
print(f)

# append

f= open("fruits.txt","a") # over ride pannum
f.write("\n hi")
f.write("\n byee")
f.close()

# read and write

f= open("fruits.txt","r+")
print(f.read())


f= open("fruits.txt","r+")
print(f.readline())