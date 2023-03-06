import './App.css';
import React, {useState} from 'react';

function App() {  
  const [items, setItems] = useState([
    { name: 'Milk', isPurchased: false },
    { name: 'Cheese', isPurchased: true },
    { name: 'Beans', isPurchased: false },
  ]);
  const [newItemName, setNewItemName] = useState('');

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

  function purchaseItem(index) {
    // make a copy of the item that we're updating
    const itemToUpdate = {...items[index]};
    // modify the isPurchased property on the new copy
    itemToUpdate.isPurchased = true;
    // make a copy of the array of items
    const newItems = [...items];
    // replace the old version of the item with the updated one
    newItems[index] = itemToUpdate;
    // replace state with new state
    setItems(newItems);
  }

  const itemNodes = items.map((item, index) => (
    <li key={index}>
      <span>{item.name}</span>
      {/* {item.isPurchased && <span>Purchased</span>} */}
      {item.isPurchased ? <span>Purchased</span> : <button onClick={() => {purchaseItem(index)}}>Purchase</button>}
    </li>
  ));

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
