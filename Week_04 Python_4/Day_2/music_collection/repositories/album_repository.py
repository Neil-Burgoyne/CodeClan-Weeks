from db.run_sql import run_sql

from models.album import Album
from models.artist import Artist

def save(album):
    sql = """INSERT INTO tasks (title, artist, genre) 
             VALUES (%s, %s, %s) RETURNING *"""
    values = [album.title, album.artist, album.genre]
    results = run_sql(sql, values)
    id = results[0]['id']
    album.id = id
    return album


def select_all():  
    album = [] 

    sql = "SELECT * FROM albums"
    results = run_sql(sql)

    for row in results:
        album = Artist(row['first_name'], row['last_name'], row['id'])
        album.append(album)
    return album





def delete_all():
    sql = "DELETE FROM albums" 
    run_sql(sql)


def update(album):
    sql = "UPDATE albums SET (title, artist_id, genre) = (%s, %s, %s) WHERE id = %s"
    values = [album.title, album.artist_id, album.genre, album.id]
    run_sql(sql, values)