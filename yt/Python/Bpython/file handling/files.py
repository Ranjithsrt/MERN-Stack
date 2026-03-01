# file handling

import os

# r - read
# w - write
# a - append
# x - create
# r+ - read and write
# a+ - read and append


f = open("names.txt")
print(f.read()) # read whole file
print(f.read(4)) # read first 4 characters
print(f.readline()) # read first line
print(f.readlines()) # read all lines



# for loop

for line in f:
    print(line)
 f.close


# try and except

try:
    f = open("names.txt")
    print(f.read())
except FileNotFoundError:
    print("File not found")
finally:
    f.close()

# append

f = open("names.txt", "a")
f.write("\n Virat")
f.close()


# write override

f = open("context.txt", "w")
f.write(" \n i deleted all of the context")
f.close()

# create file
# opens a file for writing, create the file if it does not exists

f = open("namelist.txt", "w") # create file
f.close() 

# create the specific file,but  return an error if the file exists 

if os.path.exists("names.txt"):
    print("File exists")
else:
    print("File does not exist")

# copy file

import shutil
shutil.copyfile("names.txt", "more_names.txt")

# delete file

os.remove("names.txt")

if os.path.exists("names.txt"):
    os.remove("names.txt")

with open("more_names.txt", "w") as f:
    content = f.read()
s
with open("names.txt", "w") as f:
    f.write(content)