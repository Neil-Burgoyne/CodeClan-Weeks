import unittest

from src.compare import compare

class TestCompare(unittest.TestCase):

    def test_compare__3_1_returns_3_is_greater_than_1(self):
        self.assertEqual("3 is greater than 1", compare(3, 1))

    def test_compare__5_10_returns_5_is_less_than_10(self):
        self.assertEqual("5 is less than 10", compare(5, 10))

    def test_compare__9_9_returns_both_same_numbers(self):
        self.assertEqual("Both numbers are equal", compare(9, 9))


# Task:

# - write a test that will make you handle the situation when both numbers are the same
# - run the test and see check it fails (and that you've written it correctly!)
# - write the code to pass the test
# - run the code and check the tests pass (or fix any errors and run the tests again)
