# PDA Homework - List & Dictionary in a Program


# I.T.5 - List in a Program


neils_list = ["gaming", "security", "artificial_intelligence"]

def add_interest(list, interest):
    list.append(interest)

add_interest(neils_list, "Aerospace")

print(neils_list)


# Lists are used in programming to store multiple items in a single variable
# Rather than making new variables for everything we wish to include in our code, we can group them within a single variable
# We can manipulate lists using built-in functions, such as adding, deleting, changing, sorting, and listing to existing Lists


# I.T.6 - Dictionary in a Program


neils_dict = {
    "dad": "David",
    "mum": "Pat",
    "brother": "Paul"
}

def change_brother(neils_dict):
    neils_dict["brother"] = "Scott"

change_brother(neils_dict)

print(neils_dict)


# Dictionaries are used to store data in a pair, known as "key-value pairs".
# Each key in the dictionary is connected to a value, and because of that you can use a key to access the value related to it
# A key's value can be string(str), a number(int), a list, or even another dictionary(called nested dictionaries)
#  Dictionaries do not allow duplicates within the same dictionary