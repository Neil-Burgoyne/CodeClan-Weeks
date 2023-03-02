import unittest
from src.drink import Drinks

class TestDrinks(unittest.TestCase):
    
    def setUp(self):
        self.drink = Drinks("Coffee", 2.00, 40)
        
    
    def test_drink_has_name(self):
        self.assertEqual("Coffee", self.drink.name)
                        
                        
    def test_drink_has_price(self):
        self.assertEqual(2.00, self.drink.price)       
    
    def test_drink_has_caffeine_level(self):
        self.assertEqual(40, self.drink.caffeine_level)