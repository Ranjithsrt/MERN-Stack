
# string and string function

a="ranjithkumar123"
print(a)
print(type(a))
print(a.upper())
print(a.lower())
print(a.capitalize())
print(a.title())
print(a.count(a))
print(a.endswith("h"))
print(a.endswith("srt"))
print(a.find("t"))
print(a.find("a",5))
print(a.replace("a","A"))
print(a.isupper())
print(a.islower())
print(a.isalnum())
print(a.isalpha())

b="he\n is\n good"
print(b)
print(b.splitlines())
print(b.splitlines(True))

print(len(b))
print( len(b.strip()))
print(len(b.lstrip()))
print(len(b.rstrip()))

# string manipulating

s = "sample"
print(s)
print(s[0:5])
print(s[:5])
print(s[1:])
print(s[-1])
print(s[-2:-1])
print(s[:-1])
print(s[::-1])

