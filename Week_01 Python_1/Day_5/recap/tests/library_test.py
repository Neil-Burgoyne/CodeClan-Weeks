import unittest
from src.library import *

class TestLibrary(unittest.TestCase):
    def setUp(self):
        self.book_1 = {
            "title": "Clean Code",
            "author": "Robert Martin",
            "genre": "Software Development"
        }

        self.book_2 = {
            "title": "Harry Potter",
            "author": "J K Rowling",
            "genre": "Fantasy"
        }

        self.book_3 = {
            "title": "The Lord of the Rings",
            "author": "J R R Tolkien",
            "genre": "Fantasy"
        }

        self.library = {
            "name": "CodeClan Library",
            "books": [
                self.book_1,
                self.book_2,
                self.book_3
            ]
        }


    def test_get_name(self):
        expected = "CodeClan Library"
        actual = get_name(self.library)
        self.assertEqual(expected, actual)


    def test_get_books(self):
        expected = [self.book_1, self.book_2, self.book_3]
        actual = get_books(self.library)
        self.assertEqual(expected, actual)


    def test_add_book(self):
        new_book = {
            "title": "The Hobbit",
            "author": "J R R Toklien",
            "genre": "Fantasy"
        }
        add_book(new_book, self.library)
        expected = new_book
        actual = self.library["books"][3]
        self.assertEqual(expected, actual)


    def test_remove_book(self):
        remove_book(self.book_1, self.library)
        expected = [self.book_2, self.book_3]
        actual = self.library["books"]
        self.assertEqual(expected, actual)


    def test_get_book_by_title(self):
        expected = self.book_1
        actual = get_book_by_title("Clean Code", self.library)
        self.assertEqual(expected, actual)


    def test_has_book_with_title__true(self):
        expected = True
        actual = has_book_with_title("Clean Code", self.library)
        self.assertEqual(expected, actual)


    def test_has_book_with_title__false(self):
        expected = False
        actual = has_book_with_title("Head First Python", self.library)
        self.assertEqual(expected, actual)


    def test_get_books_by_genre(self):
        expected = [self.book_2, self.book_3]
        actual = get_books_by_genre("Fantasy", self.library)
        self.assertEqual(expected, actual)
