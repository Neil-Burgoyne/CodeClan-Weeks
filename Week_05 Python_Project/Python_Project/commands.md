Terminal commands to start up my database and website:

dropdb python_travel

createdb python_travel

psql -d python_travel -f db/python_travel.sql

python3 -m flask run
