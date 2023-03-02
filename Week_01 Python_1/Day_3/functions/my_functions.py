# def greet(name, time_of_day): # <- Parameter/s
#     return "Good " + time_of_day + ", " + name + "!" # <- Concatenation

# name_1 = "Neil"
# name_2 = "Ada"
# part_of_day_1 = "morning"
# part_of_day_2 = "afternoon"

# greeting = greet(name_1, part_of_day_1) # <- Argument
# print(greeting)

# greeting_2 = greet(name_2, part_of_day_2)
# print(greeting_2)

# def greet_2():
#     pass

# print(greet_2()) # <- This will return None

# def greet_3():
#     words = "Hey" # <- Example of Encapsulation, can only been seen within this function
#     return words

# def greet_4():
#     return words

# print(greet_3())


chickens = [
  { "name": "Margaret", "age": 2, "eggs": 0 },
  { "name": "Hetty", "age": 1, "eggs": 2 },
  { "name": "Henrietta", "age": 3, "eggs": 1 },
  { "name": "Audrey", "age": 2, "eggs": 0 },
  { "name": "Mabel", "age": 5, "eggs": 1 },
]

# total_eggs = 0

# for chicken in chickens:
#     total_eggs += chicken["eggs"]
#     chicken["eggs"] = 0 # eggs have been collected

# print(f"{total_eggs} eggs collected") # <- Interpolation

def collect_eggs(chicken_list):
    total_eggs = 0

    for chicken in chicken_list:
        total_eggs += chicken["eggs"]
        chicken["eggs"] = 0 # eggs have been collected

    return f"{total_eggs} eggs collected"

print(collect_eggs(chickens))