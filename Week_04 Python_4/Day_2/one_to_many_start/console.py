import pdb
from models.task import Task
from models.user import User

import repositories.task_repository as task_repository
import repositories.user_repository as user_repository

task_repository.delete_all()
user_repository.delete_all()

user1 = User("Neil", "Burgoyne")
user_repository.save(user1)
user2 = User("Jarrod", "Bennie")
user_repository.save(user2)

task1 = Task("Walking dog", 60, user1,)
task_repository.save(task1)
task2 = Task("Make dinner", 30, user1)
task_repository.save(task2)

pdb.set_trace()
