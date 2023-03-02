class CoffeeShop:
    def __init__(self, name, till):
        self.name = name
        self.till = till
        self.drinks = []
    
    def increase_till(self, amount):
        self.till += amount

    def drink_count(self):
        return len(self.drinks)

    def customer_is_old_enough(self, customer):
        return customer.age >= 16


