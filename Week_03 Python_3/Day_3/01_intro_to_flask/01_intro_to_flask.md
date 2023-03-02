# Intro to Flask

**Duration: 60 minutes**

## Learning Objectives

- Be able to use pip to install packages
- Understand how to set up lightweight server with Flask
- Set up a basic Flask project.

## Introduction

If you're developing a web app in Python, chances are you will be using a framework.

A framework "is a code library that makes a developer's life easier when building reliable, scalable, and maintainable web applications" by providing reusable code or extensions for common operations. There are a number of frameworks for Python, including Flask, Tornado, Pyramid, and Django.

Exactly what is implemented in the framework and what is left for the developer to write varies from framework to framework. Flask is a very lightweight framework compared to the likes of and Django. The biggest difference between Flask and Django is:

- Flask implements a bare-minimum and leaves the bells and whistles to add-ons or to the developer

- Flask is also easy to get started with as a beginner because there is little boilerplate code needed for getting a simple app up and running.

- Django follows a "batteries included" philosophy and gives you a lot more out of the box.

We will be looking at Flask and setting up a simple web application.

### Initial setup

In order to get our application up and running, there are a few steps to follow.

```bash
# terminal

mkdir my_web_app
cd my_web_app
```

### Pip

Now we can start to use the power of pip! Pip is a package manager that allows us to use all sorts of external packages in our apps.

We want to be using pip for python3 so we will use the command `pip3` to install our dependancies.

Since we're going to make a simple web server, we're going to use [Flask](http://flask.pocoo.org/), a micro-framework that is similar to Ruby's Sinatra, or JavaScript's Express.

The first thing we'll do is download and install Flask:

```bash
# terminal

pip3 install Flask
```

Now that we have Flask set up, let's set up a simple base structure for our app and make sure that we can connect to the server.

### Hello World!

Let's create a file called app.py. This will host the application. Make sure you are in the `my_web_app` directory and then run the following command:

```bash
# terminal

touch app.py
```

Open the project in VS code and go to `app.py` and add the following code

```python
# app.py

from flask import Flask

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True)
```
The code above simply creates the application object as an instance of class Flask imported from the flask package.

The app variable is used as an instance of Flask. Once we have that instance we should be able to have flask run our server and allow us to connect to it via our browser.

The `__name__` variable passed to the Flask class is a Python predefined variable, which is set to the name of the module in which it is used.

Flask uses the location of the module passed here as a starting point when it needs to load associated resources such as template files.

Passing `__name__` is almost always going to configure Flask in the correct way.

The application then imports the controller module, which doesn't exist yet.

We also added a condition at the end to run flask in debug mode. This is useful when you are developing applications.

### Routes

Routes are the different URLs that the application implements. In Flask, handlers for the routes are written as Python functions, called view functions.

We want our routes to be separated out nicely. So we will create what is known as a controller.

This will deal with requests that come in to the application and determine what view functions will run based on the url that the user requests.

View functions are mapped to one or more URLs so that Flask knows what logic to execute when a client requests a given URL

We will start off creating our `controller.py` file inside a controllers folder and adding a new function for a home route.

We will also need an `__init__.py` file so we can import the controller into the app. 

```bash
mkdir controllers
touch controllers/controller.py
```

And we will import this controller into `app.py`

```python
# app.py

app = Flask(__name__)

from controllers import controller # ADDED
```

In `controller.py `we will import our Flask instance from the app package. 

This may look strange as we wil be importing app from app.
Remember here that we are importing the Flask instance called app from the file called app.py.

We will then add a new route to `/` and below write the function that will execute when we go to that route in the browser.

```python
# controller.py

from app import app

@app.route('/')
def index():
    return "Hello, World!"
```

This view function will just return a greeting as a string.

The `@app.route` line above the function is what is known as a decorator. 

Decorators in Python are used to add extra functionality to a function without having to write that functionality ourselves.

Flask comes with several in-built decorators that we can leverage to make our app run smoothly. 

> We __could__ write our own decorators but to do that we need an understanding of higher order functions and callbacks. (More on that later though!)

In our case, the `@app.route` decorator creates an association between the URL and the function.

In this example the decorator associates the URL `/` to this function. This means that when a web browser requests this URL, Flask is going to execute this function and pass the return value of it back to the browser as a response. If this does not make complete sense yet, it will in a little bit when you run this application.

### Running the application
Believe it or not, the application is now complete!

Before running it, though, Flask needs to be told how to import it, by setting the FLASK_APP environment variable.

We want to use app.py to run our server so we will point Flask in that direction.

We will do this in the terminal:

```bash
# terminal 

export FLASK_APP=app.py
```

Recent versions of macOS already use Flask's default port and so we need to specify a different one:

```bash
# terminal 

export FLASK_RUN_PORT=4999
```

(Both these changes will not persist if we close the Terminal, but we'll make them more permanent shortly).

Are you ready to be blown away? You can run your first web application, with the following command:

```bash
# terminal

flask run
```
You should see the following:

```bash
* Serving Flask app "app.py"
* Environment: production
  WARNING: This is a development server. Do not use it in a production deployment.
  Use a production WSGI server instead.
* Debug mode: off
* Running on http://localhost:4999/ (Press CTRL+C to quit)
```

So now if we go to our browsers and visit `http://localhost:4999` we should see Hello World! in the browser window!

### Route parameters

We may also want to pass in some parameters from our url.

For, example we may take in a name and return a string of "Hello " plus the name

To do this we need to declare these path variables in our route using `<>` arrows with the name of our variable inside.

We then pass that variable to the function.  

Let's create a new route.

```python
# controller.py

from app import app

@app.route('/')
# AS BEFORE


@app.route('/<name>') # ADDED
def greet(name): # ADDED
    return f"Hello {name}!"  # ADDED
```
> Note we have to stop and start the server for this change to take effect.

Now if we go to  `http://localhost:4999/Bob` we should see `Hello Bob` displaying!

Try hitting the url with different names. i.e. `http://localhost:4999/Alice`, etc

Regardless of the name we use in the url we always hit the greet route and the name is used to build up the string.

### Setting up the environment variable.

One more thing.... Since environment variables aren't remembered across terminal sessions, you may find it a bit tedious to always have to set the `FLASK_APP`, and `FLASK_RUN_PORT` environment variables when you open a new terminal window.

Flask allows you to register environment variables that you want to be automatically imported when you run the flask command.

To use this option you have to install the `python-dotenv` package:

```bash
# terminal

pip3 install python-dotenv
```

Then you can just write the environment variable names and values in a .flaskenv file in the top-level directory of the project:

```bash
# terminal

touch .flaskenv
```

```python
# .flaskenv

FLASK_APP=app.py
FLASK_RUN_PORT=4999
```

Doing this is optional. If you prefer to set the environment variables manually, that is perfectly fine, as long as you always remember to do it.

One final thing we can do is sort out a pesky business of having to restart the server every time we make a change.

In the `controller.py` file, change 'Hello World' to 'Python is awesome!'.

If we refresh the browser nothing happens. We have to restart the server in terminal. Go to terminal and press `ctr+c`, then run the `flask run` command again. Refresh the browser and our change should now show.

To fix this we can use Flasks development environment which will allow hot reloading.

In the same `.flaskenv` file we will add another environment variable.

```python
# .flaskenv
FLASK_APP=app.py
FLASK_RUN_PORT=4999
FLASK_ENV=development # ADDED
```

Now if we make a change to the controller file our app should update on a browser refresh.

Try it out!

## Recap

<details>
<summary>Why do we use frameworks when developing apps?</summary>
  Frameworks provide reusable code or extensions for common operations.
</details>

<details>
<summary>What is the purpose of the controller?</summary>
  To deal with requests that come in to the application and determine what view functions will run based on the url
</details>

<details>
<summary>How do we tell Flask where the application should start?</summary>
  We define a FLASK_APP environment variable pointing to our main file
</details>


## Summary

Flask is a simple, lightweight server that allows us to quickly set up web applications and gives us the tools to create routes and run flask instances from the terminal.
