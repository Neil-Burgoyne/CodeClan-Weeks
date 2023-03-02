# numbers = range(1, 11) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# evens_squared = [number * number for number in numbers if number % 2 == 0]
evens_squared = [number * number for number in range(1, 11) if number % 2 == 0]

# for number in numbers: # the loop
#     if number % 2 == 0: # the condition
#         evens_squared.append(number * number)
        # "evens_squared.append" - appending something to the list
        # "number * number" - what gets added to the list


print(evens_squared)