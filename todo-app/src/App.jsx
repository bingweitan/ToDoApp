import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/ToDoInput'
import { TodoList } from './components/ToDoList'
import { useState } from 'react'

function App() {
  // const todos = [
  //   { input:'Learn React', complete: false }, 
  //   { input:'Build a Todo App', complete: false },
  //   { input:'Deploy the App', complete: true },
  //   { input:'Refactor Code', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input:'Learn React', complete: false } 
  ])

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete:false}]
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    
  }

  function handleDeleteTodo(index) {

  }

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
