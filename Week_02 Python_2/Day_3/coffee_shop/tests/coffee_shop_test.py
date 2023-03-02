import unittest
from src.coffee_shop import CoffeeShop
from src.customer import Customer
from src.drink import Drinks

class TestCoffeeShop(unittest.TestCase):
    def setUp(self):
        self.drink_1 = Drinks("Coke", 3.00, 34)
        self.drink_2 = Drinks("Fanta", 4.00, 0)
        self.drink_3 = Drinks("Coffee", 2.00, 40)
        self.coffee_shop = CoffeeShop("The Prancing Pony", 100.00,)
        self.customer = Customer("Michael Jordan", 200.00, 59, 5)

    def test_has_name(self):
        self.assertEqual("The Prancing Pony", self.coffee_shop.name)

    def test_has_till(self):
        self.assertEqual(100.00, self.coffee_shop.till)

    def test_increase_till(self):
        # The 3 A's of Testing
        # Arrange - setup specific to this test
        # Act - do the thing you want to test
        self.coffee_shop.increase_till(10.00)
        # Assert - did it do what you wanted?
        self.assertEqual(110.00, self.coffee_shop.till)

    def test_customer_is_old_enough__returns_true(self):
        self.assertEqual(True, self.coffee_shop.customer_is_old_enough(self.customer))




   
    