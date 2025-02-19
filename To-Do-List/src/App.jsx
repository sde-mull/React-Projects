import { useState } from 'react'
import './Styles/App.css'
import Category from './Components/Category'
import ToDoList from './Components/ToDoList';

function App() {

  const [categorySelected, setCategorySelected] = useState(null);

  return (
    <>
      <h1 className = "Title"> My Custom To-Do List </h1>
      <div className="AppContainer">
        <Category onCategorySelect={setCategorySelected} categorySelected={categorySelected} />
        <ToDoList categorySelected={categorySelected} />
      </div>
    </>
  )
}

export default App
