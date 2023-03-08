import './App.css';
import React, {useState} from "react"

function App() {
  const [todoList, setTodoList] = useState ([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", ppriority: "high" },
  ])

  const [name, setName] = useState("")
  const [priority, setPriority] = useState("")

const nodeList = todoList.map((task, index) => <li key={index} className={task.priority}> {task.name}</li>)


  return (
    <div className="App">
      <h1>Todo's</h1>
      <hr></hr>
      <ul>{listItems}</ul>
      
        
        
      
    </div>
  );
}

export default App;
