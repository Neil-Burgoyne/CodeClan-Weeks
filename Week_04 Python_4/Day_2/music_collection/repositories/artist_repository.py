from db.run_sql import run_sql
from models.artist import Artist
import repositories.album_repository as album_repository


def save(artist):
    sql = """INSERT INTO tasks (first_name, last_name) 
             VALUES (%s, %s) RETURNING *"""
    values = [artist.first_name, artist.last_name]
    results = run_sql(sql, values)
    id = results[0]['id']
    artist.id = id
    return artist


def select_all():  
    artists = [] 

    sql = "SELECT * FROM artists"
    results = run_sql(sql)

    for row in results:
        artist = Artist(row['first_name'], row['last_name'], row['id'])
        artists.append(artist)
    return artists


def delete_all():
    sql = "DELETE FROM artists" 
    run_sql(sql)


def update(artist):
    sql = "UPDATE artists SET (first_name, last_name) = (%s, %s) WHERE id = %s"
    values = [artist.first_name, artist.last_name, artist.id]
    run_sql(sql, values)