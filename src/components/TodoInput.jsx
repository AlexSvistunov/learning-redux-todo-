import React from 'react'

const TodoInput = ({value, onChangeHandler}) => {
  return (
    <input value={value} onChange={(e) => onChangeHandler(e.target.value)}></input>
  )
}

export default TodoInput