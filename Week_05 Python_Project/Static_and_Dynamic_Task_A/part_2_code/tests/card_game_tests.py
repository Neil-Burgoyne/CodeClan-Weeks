import unittest
from src.card import Card
from src.card_game import CardGame

class TestCardGame(unittest.TestCase):
    def setUp(self):
        self.card = Card("Joker", 1)
        self.card1 = Card("Spade", 9)
        self.card2 = Card("Diamond", 8)

    def test_check_for_ace__True(self):
        expected = True
        actual = CardGame.check_for_ace(self, self.card)
        self.assertEqual(expected, actual)

    def test_check_for_ace__False(self):
        expected = False
        actual = CardGame.check_for_ace(self, self.card1)
        self.assertEqual(expected, actual)

    def test_highest_card__1(self):
        expected = self.card1
        actual = CardGame.highest_card(self, self.card1, self.card2)
        self.assertEqual(expected, actual)

    def test_highest_card__2(self):
        expected = self.card1
        actual = CardGame.highest_card(self, self.card2, self.card1)
        self.assertEqual(expected, actual)

    def test_cards_total(self):
        cards = [self.card, self.card1, self.card2]
        expected = "You have a total of 18"
        actual = CardGame.cards_total(self, cards)
        self.assertEqual(expected, actual)