import React from 'react'

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo} = props;
    return (
        <li key={item.id}>
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
              />
              <button onClick={() => changeFocus()}>Edit</button>
              <button onClick={() => completeTodo(item.id)}>
            Complete
            </button>
              <button onClick={() => removeTodo(item.id)}>Delete</button>
              {""}
            </li>
    )
}

export default TodoItem
