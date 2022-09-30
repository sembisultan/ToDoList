import './Todo.css';

/*const styles = {
   li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
   },
   input: {
      marginRight: '1rem',
      listStyleType: 'none'
   }
}*/

const Todo = ({ todo, removeTodo, handleToggle }) => {
   const handleRemove = () => {
      removeTodo(todo);
   }

   /*const completedStyle = []

   const handleComplete = () => {
      if (todo.completed) {
         
      } else {
         completedStyle.push('done')
      }
   }*/


   return (
      <li className='list'>
         <div className="Todo">
            <span className={todo.completed ? "done" : "Nodone"}
               onClick={() => handleToggle(todo.id)}>
               {todo.title}
            </span>
            <button type="button" onClick={handleRemove} className="rm">
               x
            </button>
         </div>
      </li>
   )
}

export default Todo;