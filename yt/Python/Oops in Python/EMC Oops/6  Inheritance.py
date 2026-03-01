#  Inheritance

# 1. Single Level Inheritance


class dad:
    def Phone(self):
        print("Dads phone")


class son(dad):
    def laptop(self):
        print("sons laptop")


ram = son()
ram.Phone()
ram.laptop()

# 2. Multiple Level Inheritance


class dad:
    def Phone(self):
        print("Dads phone")


class mom:
    def sweet(self):
        print("Moms sweet")


class son(dad, mom):
    def laptop(self):
        print("sons laptop")


ram = son()
ram.Phone()
ram.sweet()
ram.laptop()


# 3. Multilevel Inheritance


class grandpa:
    def phone(self):
        print("grandpas phone")


class dad(grandpa):
    def money(self):
        print("dads money")


class son(dad):
    def laptop(self):
        print("sons laptop")


ram = son()
ram.phone()
ram.money()
ram.laptop()

d1 = dad()
d1.phone()
d1.money()


# 4. Hierarchical Inheritance


class dad:
    def money(self):
        print("dads money")


class son1(dad):
    pass


class son2(dad):
    pass


class son3(dad):
    pass


d1 = dad()
d1.money()

s1 = son1()
s1.money()

s2 = son2()
s2.money()

s3 = son3()
s3.money()


# 5. Hybrid Inheritance


class dad:
    def money(self):
        print("dads money")


class land:
    def land(self):
        print("important land")


class so1n(dad, land):
    pass


class son2(dad):
    pass


class son3(land):
    pass


d1 = dad()
d1.money()

s1 = so1n()
s1.money()
s1.land()

s2 = son2()
s2.money()

s3 = son3()
s3.land()
