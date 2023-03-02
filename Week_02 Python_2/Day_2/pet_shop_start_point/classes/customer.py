class Customer:

    def __init__(self, name, cash):
        self.name = name
        self.cash = cash
        self.pets = []

    def reduce_cash(self, amount):
        self.cash -= amount
        # self.cash = self.cash - amount

    def pet_count(self):
        return len(self.pets)

    def add_pet(self, new_pet):
        self.pets.append(new_pet)

    def get_total_value_of_pets(self):
        total = 0
        for pet in self.pets:
            #total = total + pet.price
            total += pet.price
        
        return total
