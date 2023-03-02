import pdb
from models.book import Book
from models.author import Author

import repositories.book_repository as book_repository
import repositories.author_repository as author_repository

book_repository.delete_all()
author_repository.delete_all()

author1 = Author("George", "Orwell")
author_repository.save(author1)
author2 = Author("Iain", "Banks")
author_repository.save(author2)

book_1 = Book("Tower of the Noobs", "Fantasy", "Ryan Rimmel", author1)
book_repository.save(book_1)
book_2 = Book("Ritualist", "Fantasy", "Dakota Krout", author1)
book_repository.save(book_2)

