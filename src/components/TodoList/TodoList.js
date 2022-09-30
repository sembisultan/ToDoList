import Todo from "../Todo/Todo";

const TodoList = ({ todoList, removeTodo, handleToggle }) => {
   return (
      <div>
         <ul>
            {
               todoList.map((todo) =>
                  <Todo
                     todo={todo}
                     removeTodo={removeTodo}
                     handleToggle={handleToggle}
                     key={todo.id}
                  />
               )
            }
         </ul>
      </div>
   )
}

export default TodoList;