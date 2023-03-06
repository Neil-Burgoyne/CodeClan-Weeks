import './App.css';
import React, {useState} from "react"

function App() {
  const [todoList, setTodoList] = useState ([
    { name: "Buy shopping", priority: true },
    { name: "Clean bathroom", priority: false},
    { name: "Car's MOT", ppriority: true},
  ])

  const [name, setName] = useState("")
  const [priority, setPriority] = useState(false)








const listItems = todoList.map((item, index) => (
<li key={index}>
  <span>{listItems}</span>

</li>)

)





  return (
    <div className="App">
      <h1>Todo's</h1>
      <hr></hr>
      <ul>{listItems}</ul>
      
        
        
      
    </div>
  );
}

export default App;
