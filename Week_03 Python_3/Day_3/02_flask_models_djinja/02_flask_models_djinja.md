# Flask Templates

**Duration: 60 minutes**

## Learning Objectives

- Understand how to set up templates with Flask
- Understand how Flasks architecture relates to MVC
- Create Views in Flask

## Introduction

Now that we have Flask set up we will continue working on the same application, and in particular, generate more elaborate web pages that have a complex structure and many dynamic components.

To do this we are going to use Templates.

> Download and open the start point. start the app and go to http://localhost:4999

We have a start point for a simple ToDo list. There are 2 files in the model folder. A `Task` class which stores a title, description and a boolean value to signify if the task is complete or not.

We also have a `todo_list` script that gives us some dummy data.

You will also notice that we have put our controller file inside a `controllers` directory. This is standard practice as we may have multiple controllers. Due to this we have modified `app.py` to import the controller from `controllers`.

We are going to code up our route to view all of the tasks and have them rendered using an HTML template.

## Naming routes

So far the view function in the application returns a simple Hello World string. What we __could__ do now is expand that returned string into a complete HTML page that displays the tasks.

But it makes no real sense to have the route to this is just `/`. What we should be doing is following what is known as RESTful routing. This is where we define routes for specific resources and actions we want to perform.

So for example the resource we want to request is all of the tasks to be displayed. So our route should be something like `/tasks`. This makes sense as we are requesting the tasks. Think about the BBC website. When we want to get the news we go to `bbc.co.uk/news`. If we want the weather we go to `bbc.co.uk/weather`. RESTful routes allow us to structure our web app in a logical way. There are defined RESTful routes depending on what you want to do (i.e. view all, add new, edit, delete, etc). These are detailed below but we will talk through them all in due course.

|Action| Route| HTTP method|
|-------|-------|-----------|
|View all| /tasks | GET |
|View one| /tasks/id | GET |
|Create| /tasks | POST |
|Update| /tasks/id | PUT |
|Delete one| /tasks/id | DELETE |
<br>

You will notice that some of the routes follow the same pattern (i.e. `/tasks`). This is acceptable as the routes use different HTTP methods (GET/POST) so there is no conflict. If we had 2 routes with the same pattern and HTTP method then we would start to get bugs in our app. (Flask would always go to the first coded route in the controller.)

## Templates

Following MVC we want to keep the logic of your application separate from the layout or presentation of your web pages. This will make things would be much better organised, don't you think?

Templates help achieve this separation between presentation and business logic.

In Flask, templates are written as separate HTML files, stored in a templates folder that is inside the application package. So, after making sure that you are in the root directory, create the directory  in the app package to store the templates:

> Code along from this point, stopping server (ctrl+c) if it is running

```bash
mkdir templates
```

And in here let's create a new template for the index page.

```bash
touch templates/index.html
```

Now we will add some HTML code in this template.

```html
<!-- index.html -->

<html>
    <head>
        <title>{{ title }} - My To-Do List</title>
    </head>
    <body>
        <h1>My Todo List!</h1>
    </body>
</html>
```

This is mostly a standard HTML page. The interesting thing in this page is that there are a couple of placeholders for the dynamic content, enclosed in {{ ... }} sections. These placeholders represent the parts of the page that are variable and will only be known at runtime.

Now the view function can be simplified.

To use this template we will need to import a function from Flask called `render_template`.

This function takes a template filename and a variable list of template arguments and returns the same template, but with all the placeholders in it replaced with actual values.

```python
# controller.py

from flask import render_template # ADDED
from app import app

@app.route('/tasks') # MODIFIED
def index():
    return render_template('index.html', title='Home') # MODIFIED
```

> The render_template() function implements the Jinja2 template engine that comes with Flask. Jinja2 substitutes {{ ... }} blocks with the values of the arguments provided in the render_template() call.

Now if we start the server and go to http://localhost:4999/tasks we should see the header.

### More Dynamic Content

The logged in user will probably want to see their list in the home page, so we will extend the application to support that.

We will use some fake objects to get some To-Do List items to display:

If you look in the models folder we have a Task class and a todo list script. The Todo List populates a list with a couple of tasks and has some methods to return the list and to add a new task (more on that later!). Normally we wouldn't have a class like this but because we aren't using databases or any other source this will suffice to cover the concepts.

In the view we will get the list of tasks. We will then pass the tasks to the template. To get the tasks we will import them from the todo_list module. We will then pass them to our template.

```python
# controller.py

from flask import render_template
from app import app
from models.todo_list import tasks # ADDED

@app.route('/tasks')
def index():
    return render_template('index.html', title='Home', tasks=tasks) # MODIFIED
```

On the template side we have to solve a new problem. The list of tasks can have any number of entries, it is up to the view function to decide how many tasks are going to be presented in the page. The template cannot make any assumptions about how many tasks there are, so it needs to be prepared to render as many tasks as the view sends.

For this type of problem, `Jinja2` offers a `for loop` control structure.

### Loops

You have seen how Jinja2 replaces placeholders with actual values during rendering, but this is just one of many powerful operations Jinja2 supports in template files.

For example, templates also support control statements, such as if statements and for loops.

These are coded inside blocks.

```html
<!-- index.html -->

<html>
    <head>
        <title>{{ title }} - My To-Do List</title>
    </head>
    <body>
        <h1>My Todo List!</h1>
        {% for task in tasks %}  <!-- ADDED -->
        <div>
          <p>
            {{ task.title }}: <b>{{ task.description }}</b>
          </p>
        </div>
        {% endfor %}
    </body>
</html>
```

So now that we have passed the list of tasks to the template we can access it and loop over each task to display a new div for each one. This will work regardless of how many tasks are passed through.

## Recap

<details>
<summary>What folder must our HTML files go inside?</summary>
  templates
</details>

<details>
<summary>Why use a RESTful route convention?</summary>
  To deal with requests in a structured and consistant way. 
</details>

<details>
<summary>What is the sybtax for looping inside a template?</summary>
  ```html
    <% for item in items %>
    <% endfor %>
  ```
</details>


## Summary

Templates allow us to structure our views in a well organised way using HTML.

Jinja allows us to be more dynamic in our content by giving us the ability to pass through variables from the controller to be rendered. We can also use Jinja to write Python code such as for loops. 

