class PetShop:

    def __init__(self, name, pets, total_cash):
        self.name = name
        self.pets = pets
        self.total_cash = total_cash
        self.pets_sold = 0

    def stock_count(self):
        return len(self.pets)

    def increase_pets_sold(self):
        self.pets_sold += 1

    def increase_total_cash(self, amount):
        self.total_cash += amount

    def remove_pet(self, pet_to_remove):
        self.pets.remove(pet_to_remove)

    def find_pet_by_name(self, name_of_pet):
        for pet in self.pets:
            if pet.name == name_of_pet:
                return pet
        return None

    def sell_pet_to_customer(self, pet_name, customer):
        
        pet = self.find_pet_by_name(pet_name)
        
        customer.reduce_cash(pet.price)
        self.increase_total_cash(pet.price)
        self.increase_pets_sold()
        self.remove_pet(pet)
        customer.add_pet(pet)
