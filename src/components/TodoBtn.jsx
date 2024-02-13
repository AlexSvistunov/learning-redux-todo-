import React from 'react'

const TodoBtn = ({onClickFunction}) => {
  return (
    <button onClick={() => onClickFunction()}>Create todo</button>
  )
}

export default TodoBtn