import React from 'react'

const TodoInput = ({onChangeHandler, value}) => {
  return (
    <input value={value} onChange={(e) => onChangeHandler(e.target.value)}></input>
  )
}

export default TodoInput