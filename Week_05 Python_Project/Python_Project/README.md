# Terminal commands to start up my database and website:

## Drops database:

```
dropdb python_travel
```

## Create Database:

```
createdb python_travel
```

```
psql -d python_travel -f db/python_travel.sql
```

## Runs the website on LocalHost

```
python3 -m flask run
```
