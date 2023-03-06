import unittest
from models.country import Country

class CountryTest(unittest.TestCase):

    def setUp(self):
        self.country = Country("Scotland")

    def test_country_has_name(self):
        self.assertEqual("Scotland", self.country.country_name)