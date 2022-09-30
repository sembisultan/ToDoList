import React, { useState, useEffect } from 'react';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList"

function App() {
   const [todoList, setTodoList] = useState([]);
   const [listUpdated, setListUpdated] = useState(false);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
         .then((response) => response.json())
         .then((json) => setTodoList(json));
      const intervalId = setInterval(() => console.log('Hui'), 10000);
      return () => {
         clearInterval(intervalId);
      }
   }, [listUpdated]);

   const addTodo = (todo) => {
      setTodoList((prev) => [todo, ...prev]);
   }

   const removeTodo = (todo) => {
      setTodoList((prev) => {
         return prev.filter(val => val.id !== todo.id);
      })
   }

   const handleToggle = (id) => {
      setTodoList([
         ...todoList.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
         )
      ])
   }



   const handleUpdateList = () => {
      setListUpdated(!listUpdated);
   }

   const toggleTodo = (id) => {
      setTodoList(
         todoList.map(todoList => {
            if (todoList.id === id) {
               todoList.completed = !todoList.completed
            }
            return todoList
         })
      )
   }

   return (
      <div className="App">
         <TodoInput addTodo={addTodo} />
         <button type='button' onClick={handleUpdateList} className="btnUpdate">Updated list</button>
         <TodoList todoList={todoList} removeTodo={removeTodo} onToggle={toggleTodo} handleToggle={handleToggle} />
      </div>
   );
}

export default App;
