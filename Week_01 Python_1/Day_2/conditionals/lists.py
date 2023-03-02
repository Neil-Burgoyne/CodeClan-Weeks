fruits = ["apple", "banana", "grape", "orange"]
print(fruits)

# Accessing a list
print(fruits[0])
print(fruits[2])
# print(fruits[10])
print(fruits[-1])
print(fruits[-2])

# Updating a list
fruits[1] = "mango"
print(fruits)

# Create and Empty List
my_list = []
print(my_list)
my_list = list()

# Length of a List
num_items = len(fruits)
print(num_items)

# Adding and removing
fruits.append("pear")
print(fruits)
fruits.pop()
print(fruits)

# Lists are weird
fruits_and_numbers = ["apple", 1, "pear", 2, True]
print(fruits_and_numbers)

# Nested Lists
nested_list = [1, 2, 3, 4, [5, 6, 7]]
print(nested_list)
print(nested_list[0])
print(nested_list[4])
print(nested_list[4][0])