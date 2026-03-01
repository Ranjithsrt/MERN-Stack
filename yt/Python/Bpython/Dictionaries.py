car ={
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

car2 = dict(brand="Ford", model="Mustang", year=1964)

print(car)
print(car2)
print(type(car))
print(len(car))


print(car["brand"])

print(car.get("model"))


print(car.keys())
print(car.values())
print(car.items())

print("model" in car)

car["brand"] = "tesla"

car.update({"color": "red"})

print(car)

car.pop("year")

print(car.popitem())

del car["model"]

car.clear()

print(car)

 #copy

car2 = car.copy()

print(car2)

# nested dictionary

myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {"name" : "Sophia", "year" : 2008 },
  "child3" : {"name" : "Linus", "year" : 2011 }
}

print(myfamily)