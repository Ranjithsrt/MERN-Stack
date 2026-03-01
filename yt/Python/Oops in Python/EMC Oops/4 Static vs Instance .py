# Static vs Instance

"""
static
  - constant values or datas
  - common for all objects

instance  (self)
  - dynamic values or datas
  - unique for each object
"""


class Person:

    sleepingtime = 8  # static variable

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.sleepingtime = 10  # instance variable

    @staticmethod
    def sleep():
         print("person should sleep for", Person.sleepingtime , "hours") 
    @classmethod
    def work(cls):
        print("person should work for", cls.sleepingtime , "hours")


person1 = Person("Arun", 20)

print(person1.sleepingtime)  # 10

print(Person.sleepingtime)  # 8

Person.sleep()

Person.work()
