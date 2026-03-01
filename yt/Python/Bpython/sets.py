num ={1,2,3,4,5}

print(num)
print(type(num))

num1 = set([1,2,3,4,5])
print(num1)
print(type(num1))

# not duplicate value allowed

nums ={1,2,3,4,5,1,2,3,4,5}
print(nums)
print(type(nums))

nums2 ={1,2,3,4,5,0,True,False,3,4,5}
print(nums2)
print(type(nums2))

print(len(nums2))
print(max(nums2))
print(min(nums2))

print(3 in nums2)
 

 # add

nums2.add(6)
print(nums2)

nums2.update([7,8,9])
print(nums2)

nums2.remove(6)
print(nums2)

nums2.discard(7)
print(nums2)

nums2.pop()
print(nums2)

nums2.clear()
print(nums2)    


one1 = {1,2,3}
two2 = {3,4,5}

print(one1.union(two2))

print(one1.intersection(two2))

print(one1.difference(two2))

print(two2.difference(one1))