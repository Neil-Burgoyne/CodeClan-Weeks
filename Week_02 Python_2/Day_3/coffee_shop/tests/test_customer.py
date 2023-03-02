import unittest
from src.customer import Customer
from src.drink import Drinks

class TestCustomer(unittest.TestCase):
    def setUp(self):
        self.customer = Customer("Michael Jordan", 200.00, 59, 40)

    def test_customer_has_a_name(self):
        self.assertEqual("Michael Jordan", self.customer.name)
    
    def test_customer_has_a_wallet(self):
        self.assertEqual(200.00, self.customer.wallet)

    def test_customer_can_buy_drink(self):
        drink = Drinks("Coffee", 2.00, 0)
        self.customer.buy_drink(drink)
        self.assertEqual(198.00, self.customer.wallet)
        
    def test_customer_has_age(self):
        self.assertEqual(59, self.customer.age)