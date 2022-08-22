import { useState } from 'react';
// import styled from 'styled-components';
import './App.css';
import Input from './Input';
import InputPlusDate from './InputPlusDate';
import List from './List';


function App() {
  const [ todoLists, setTodoLists ] = useState([]);
  const [ radioValue, setRadioValue ] = useState('date');

  const createTodoLists = (todo) => {
    const newTodoLists = [...todoLists, todo];
    setTodoLists(newTodoLists);
  }
  const deleteTodoLists = (id) => {
    const _todoLists = [...todoLists];
    const newTodoLists = _todoLists.filter((_todo) => (_todo.id !== id));
    setTodoLists(newTodoLists);
  }
  const inputChange = (e) => {
    setRadioValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>Schedule Note</h1>
      <div className="InputContainer">
        <label>
          <input 
            type="radio" 
            value="date" 
            checked={ radioValue === "date"} 
            onChange={inputChange}
          />
          日付あり
        </label>
        <label>
          <input 
            type="radio" 
            value="none" 
            checked={ radioValue === "none"} 
            onChange={inputChange}
          />
          日付なし
        </label>
        { radioValue === 'date' 
          ? <InputPlusDate createTodoLists={createTodoLists}/>
          : <Input createTodoLists={createTodoLists}/>
        }
      </div>
      <List todoLists={todoLists} deleteTodoLists={deleteTodoLists} />
      
    </div>
  );
}

export default App;
