import unittest

from fizz_buzz import fizz_buzz

class TestFizzBuzz(unittest.TestCase):

    def test_number_divisible_by_3(self):
        self.assertEqual('Fizz',fizz_buzz(3))

    def test_number_divisible_by_5(self):
        self.assertEqual('Buzz', fizz_buzz(5))

    def test_number_is_divisible_3_and_5(self):
        self.assertEqual('FizzBuzz',fizz_buzz(15))

    def test_input_as_string(self):
        self.assertEqual('13', fizz_buzz(13))
