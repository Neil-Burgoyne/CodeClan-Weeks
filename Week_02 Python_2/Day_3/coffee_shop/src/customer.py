class Customer:
    def __init__(self, name, wallet, age, energy):
        self.name = name
        self.wallet = wallet
        self.age = age
        self.energy = energy
       
    def buy_drink(self, drink):
        self.wallet -= drink.price
