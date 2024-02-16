import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'
import { insertTodo } from '../store/todoSlice'


const TodoBtn = ({value, setInputValue}) => { 
  const dispatch = useDispatch()

  const onClickHandler = () => {
    // dispatch(addTodo({value}))
    dispatch(insertTodo(value))
    setInputValue('')

  }
  return (
    <button onClick={() => onClickHandler()}>Create todo</button>
  )
}

export default TodoBtn