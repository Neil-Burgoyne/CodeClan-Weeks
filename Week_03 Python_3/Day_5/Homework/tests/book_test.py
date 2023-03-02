import unittest
from models.book import *

class TestBook(unittest.TestCase):
    def setUp(self):
        self.task = Book("1984", "George Orwell", "Science Fiction")

    def test_has_title(self):
        expected = "1984"
        actual = self.task.title
        self.assertEqual(expected, actual)

    def test_has_author(self):
        expected = "George Orwell"
        actual = self.task.author
        self.assertEqual(expected, actual)

    def test_has_genre(self):
        expected = "Science Fiction"
        actual = self.task.genre
        self.assertEqual(expected, actual)
