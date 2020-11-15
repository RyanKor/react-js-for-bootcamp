# react todo app 상태 관리

## React 상태 관리 세팅

- .prettierrc setting

- component setting

## Project Structure

App.js <br />
| <br />
V<br />
TodoTemplate.js <br />
|               \
TodoInsert.js TodoList.js <br />
                    | <br />
                    TodoListItem.js <br />


## Core Funtion

```javascript

  const [todos, setTodos] = useState([{
    id:1,
    text: "react tutorial",
    checked: true,
  },
  {
    id:2,
    text: "Component Styling",
    checked: true,
  },
  {
    id:3,
    text: "React Schedule management system",
    checked: false,
  },
])

const nextId = useRef(4)

const onInsert = useCallback(
  text=>{
    const todo ={
      id: nextId.current,
      text,
      checked:false
    }
    setTodos(todos.concat(todo)) //불변성을 강조하는 react이기 때문에 원본 데이터에 변경을 가하지 않는 concat을 사용한다.
    nextId.current +=1
  },
  [todos]
)
const onRemove = useCallback(
  id =>{
    setTodos(todos.filter(todo=>todo.id !== id))
  },[todos]
)

const onToggle = useCallback(
  id=>{
    setTodos(
      todos.map(todo=>todo.id === id ? {...todo,checked: !todo.checked}: todo)
    )
  }, [todos]
)

```