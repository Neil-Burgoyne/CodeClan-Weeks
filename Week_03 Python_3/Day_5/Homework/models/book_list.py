from models.book import Book

book_1 = Book("1984", "George Orwell", "Science Fiction")
book_2 = Book("Master of the System", "Virlyce", "LitRPG")
book_3 = Book("Azarinth Healer", "Rhaegar", "LitRPG")
#task_3.is_complete = True

book_list = [book_1, book_2, book_3]


def get_book_list():
    return book_list


def add_book(book):
    book_list.append(book)


def delete_book(index):
    book_list.pop(index)
