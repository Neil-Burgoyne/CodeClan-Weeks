from flask import render_template, request
from app import app
from models.todo_list import tasks, add_new_task
from models.task import Task

@app.route('/tasks')
def index():
    return render_template('index.html', title='Home', tasks=tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
  taskTitle = request.form['title']
  taskDesc = request.form['description']
  newTask = Task(title=taskTitle, description=taskDesc, done=False)
  add_new_task(newTask)

  return render_template('index.html', title='Home', tasks=tasks)
