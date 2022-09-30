import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = ({ addTodo }) => {
   const [inputValue, setInputValue] = useState('');

   const handleInputValueChange = (e) => {
      setInputValue(e.target.value);
   }

   const hanldeEnterPress = (e) => {
      if (e.key === 'Enter') {
         handleAddTodo();
      }
   }

   const handleAddTodo = () => {
      if (inputValue) {
         addTodo({
            title: inputValue,
            id: Date.now(),
            complete: false
         });
         setInputValue('');
      }
   }

   return (
      <div className='wrapper'>
         <input
            type="text"
            value={inputValue}
            onChange={handleInputValueChange}
            onKeyDown={hanldeEnterPress}
            placeholder="input your value"
            className='inputStyle'
         />
         <button type='button' onClick={handleAddTodo} className="btnAdd">Add</button>
      </div>
   );
}

export default TodoInput;