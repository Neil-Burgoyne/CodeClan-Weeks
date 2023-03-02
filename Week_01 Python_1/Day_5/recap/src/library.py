def get_name(library):
    return library["name"]


def get_books(library):
    return library["books"]


def add_book(book, library):
    library["books"].append(book)


def remove_book(book, library):
    library["books"].remove(book)



def get_book_by_title(title, library):
    for book in library["books"]:
        if book["title"] == title:
            return book


def has_book_with_title(title, library):
    has_book = False
    for book in library["books"]:
        if book["title"] == title:
            has_book = True
            break
    return has_book


def get_books_by_genre(genre, library):
    found_books = []
    for book in library["books"]:
        if book["genre"] == genre:
            found_books.append(book)
    return found_books


# what is the function called?
# what parameters does it need?
# what does the function need to return?
# what does the function need to do?
