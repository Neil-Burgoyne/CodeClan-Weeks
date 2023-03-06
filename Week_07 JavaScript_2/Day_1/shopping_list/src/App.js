import './App.css';
import React, {useState} from 'react';

function App() {  
  const [items, setItems] = useState([
    { name: 'Milk', isPurchased: false },
    { name: 'Cheese', isPurchased: true },
    { name: 'Beans', isPurchased: false },
  ]);
  const [newItemName, setNewItemName] = useState('');

  const itemNodes = items.map((item, index) => {
    return <li key={index}>{item.name}</li>
  });
  
  function saveNewItem(event) {
    event.preventDefault();
    // get text from the input
    console.log(newItemName);
    // make an item object, with name and isPurchased
    const newItem = {
      name: newItemName,
      isPurchased: false,
    };
    // add new item to array
    const newItems = [...items, newItem];
    setItems(newItems);
    setNewItemName('');
  }

  function handleInputChange(event) {
    setNewItemName(event.target.value);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <hr></hr>
      <ul>
        {itemNodes}
      </ul>
      <form onSubmit={saveNewItem}>
        <label htmlFor="item-name">Add a new item:</label>
        <input id="item-name" type="text" value={newItemName} onChange={handleInputChange} />
        <input type="submit" value="Save New Item" />
      </form>
    </div>
  );
}

export default App;
