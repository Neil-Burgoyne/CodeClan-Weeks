from flask import render_template, request, redirect
import datetime

from app import app
from models.book import Book
from models.book_list import get_book_list, add_book, delete_book

@app.route("/")
def index():
    book_list = get_book_list()
    return render_template("index.html", book_list=book_list)


@app.route("/book", methods=["POST"])
def create():
    title = request.form["title"]
    author = request.form["author"]
    genre = request.form["genre"]

    
    book = Book(title, author, genre)
    add_book(book)
    return redirect("/")


@app.route("/book/<index>/delete", methods=["POST"])
def delete(index):
    delete_book(int(index))
    return redirect("/")
