import React, { useState } from 'react';
import './App.css';


function Item({ name, index }) {
  return (
  <div>
    <label>{name}</label>
    <input></input>
  </div>
  )
}

function App() {

  function insertName() {
    const nextNames = names.slice()
    nextNames.splice(0, 0, "Bob")
    setNames(nextNames)
  }

  const namesData = [
    "Alex",
    "Harrison",
    "Katie",
    "Hannah"
  ]

  const [names, setNames] = useState(namesData)

  const Items = names.map((name, index) =>
    <Item
      key={index}
      name={name}
    ></Item>
  )

  return (
    <div className="App">
      {Items}
      <button
        onClick={insertName}
      >
        Add
      </button>
    </div>
  );
}

export default App;
