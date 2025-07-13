import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/ToDoInput'
import { TodoList } from './components/ToDoList'

import { useState , useEffect,} from 'react'

function App() {
  const [todos, setTodos] = useState([
    { input:'Learn React', complete: false } 
  ])

  const [selectedTab, setSelectedTab] = useState("Open"); // Default selected tab

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete:false}]
    setTodos(newTodoList);
    handleSaveData(newTodoList); // Save the updated todos to localStorage
  }

  function handleComplete(index) {
    // update/edit/modify 
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo['complete'] = true; 
    newTodoList[index] = completedTodo; 
    setTodos(newTodoList); 
    handleSaveData(newTodoList); // Save the updated todos to localStorage
  }

  function handleDeleteTodo(index) {
    let newTodoList =  todos.filter((val, valIndex) => {
      return valIndex !== index;
    })
    setTodos(newTodoList);
    handleSaveData(newTodoList); // Save the updated todos to localStorage
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')){return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }));
  }

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleComplete={handleComplete} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
