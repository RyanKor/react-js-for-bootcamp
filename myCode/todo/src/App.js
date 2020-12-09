import React, {useReducer, useRef, useCallback} from 'react'
import TodoTemplate from './component/TodoTemplate'
import TodoInsert from './component/TodoInsert'
import TodoList from './component/TodoList'

function createBulkTodos(){
  const array = []
  for(let i = 1; i<=10; i++){

    // todo app pushing here
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked:false
    })
  }
  return array
}
// todo state management system
function todoReducer(todos,action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo=>todo.id !==action.id)
    case 'TOGGLE':
      return todos.map(todo=>todo.id===action.id ? {...todo,checked: !todo.checked}: todo)
    default:
      return todos
  }
}

const App = ()=>{
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)

  const nextId = useRef(2501)

  const onInsert = useCallback(
    text=>{
      const todo ={
        id: nextId.current,
        text,
        checked:false
      }
      dispatch({type:"INSERT", todo}) //불변성을 강조하는 react이기 때문에 원본 데이터에 변경을 가하지 않는 concat을 사용한다.
      nextId.current +=1
    },
    []
  )
  const onRemove = useCallback(
    id =>{
      dispatch({type:"REMOVE", id})
    },[]
  )

  const onToggle = useCallback(
    id=>{
      dispatch({type:"TOGGLE", id})
    }, []
  )

  return (<TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </TodoTemplate>
          )
}

export default App;