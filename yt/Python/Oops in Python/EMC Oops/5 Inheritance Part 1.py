# Inheritance


# Types of Inheritance

"""
1. Single Inheritance
2. Multiple Inheritance
3. Multilevel Inheritance
4. Hierarchical Inheritance
5. Hybrid Inheritance

"""

"""


1️⃣ Single Inheritance

One parent → One child

📘 Example:

A Parent teaches manners, and the Child learns it and can also play.

class Parent:
    def teach_manners(self):
        print("Parent teaches good manners.")

class Child(Parent):
    def play(self):
        print("Child loves to play football!")

child1 = Child()
child1.teach_manners()
child1.play()


✅ Output:

Parent teaches good manners.
Child loves to play football!


🧠 Explanation:
The Child class inherits the method teach_manners() from the Parent class.



"""

"""

2️⃣ Multiple Inheritance

One child → Many parents

📘 Example:
A Father drives a car 🚘 and a Mother cooks 🍳.
The Son can do both (inherits both).

class Father:
    def drive_car(self):
        print("Father drives a car.")

class Mother:
    def cook_food(self):
        print("Mother cooks delicious food.")

class Son(Father, Mother):
    def play_guitar(self):
        print("Son plays the guitar.")

son1 = Son()
son1.drive_car()
son1.cook_food()
son1.play_guitar()


✅ Output:

Father drives a car.
Mother cooks delicious food.
Son plays the guitar.


🧠 Explanation:
Son inherits features from both Father and Mother.



"""

"""

3️⃣ Multilevel Inheritance

Grandparent → Parent → Child

📘 Example:
A Grandfather has a farm 🌾, the Father has a car 🚗, and the Son has a bicycle 🚴‍♂️.

class Grandfather:
    def farm(self):
        print("Grandfather owns a farm.")

class Father(Grandfather):
    def car(self):
        print("Father owns a car.")

class Son(Father):
    def bicycle(self):
        print("Son rides a bicycle.")

son1 = Son()
son1.farm()
son1.car()
son1.bicycle()


✅ Output:

Grandfather owns a farm.
Father owns a car.
Son rides a bicycle.


🧠 Explanation:
Inheritance happens in a chain — each class builds on the previous one.



"""


"""

4️⃣ Hierarchical Inheritance

One parent → Many children

📘 Example:
A Father teaches discipline; both Son and Daughter inherit that.

class Father:
    def teach_discipline(self):
        print("Father teaches discipline.")

class Son(Father):
    def play_cricket(self):
        print("Son plays cricket.")

class Daughter(Father):
    def paint(self):
        print("Daughter paints beautifully.")

son1 = Son()
son1.teach_discipline()
son1.play_cricket()

daughter1 = Daughter()
daughter1.teach_discipline()
daughter1.paint()


✅ Output:

Father teaches discipline.
Son plays cricket.
Father teaches discipline.
Daughter paints beautifully.


🧠 Explanation:
Both Son and Daughter share the same parent class (Father).



"""


"""

5️⃣ Hybrid Inheritance

Combination of different types (e.g., multilevel + multiple)

📘 Example:
A Grandfather gives values, Father learns them, and Mother adds love 💕.
The Child inherits from both parents.

class Grandfather:
    def give_values(self):
        print("Grandfather gives family values.")

class Father(Grandfather):
    def work(self):
        print("Father works hard.")

class Mother:
    def love(self):
        print("Mother shows love and care.")

class Child(Father, Mother):
    def play(self):
        print("Child plays video games.")

child1 = Child()
child1.give_values()
child1.work()
child1.love()
child1.play()


✅ Output:

Grandfather gives family values.
Father works hard.
Mother shows love and care.
Child plays video games.


🧠 Explanation:
Child inherits from both Father (who already inherited from Grandfather) and Mother.







"""
