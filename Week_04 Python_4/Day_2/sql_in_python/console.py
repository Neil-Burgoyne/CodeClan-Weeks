import pdb 
from models.task import Task
import repositories.task_repository as task_repository  

task_repository.delete_all()

task_1 = Task("Walk Dog", "Jack Jarvia", 60)
task_repository.save(task_1)

task_2 = Task("Feed Cat", "Victor McDade", 5)
task_repository.save(task_2)

result = task_repository.select_all()

for task in result:
    print(task.__dict__)

pdb.set_trace()