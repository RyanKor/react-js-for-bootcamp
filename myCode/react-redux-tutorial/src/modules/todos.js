
//action type definition
const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

//action 생성함수
export const changeInput = input=>({
    type: CHANGE_INPUT,
    input
})

let id = 3; // insert 호출 시, 1씩 추가

export const insert = text => ({
    type: INSERT,
    todo: {
        id: id ++,
        text,
        done: false
    }
})

export const toggle = id => ({
    type: TOGGLE,
    id
})

export const remove = id => ({
    type : REMOVE,
    id
})


//초기 상태 및 리듀서 함수 생성하기

const initialState = {
    input : '',
    todos: [
        {
            id: 1,
            text : "redux tutorial",
            done: true,
        },
        {
            id: 2,
            text : "redux use",
            done: false,
        }
    ]
}

function todos(state=initialState, action){
    switch(action.type){
        case CHANGE_INPUT:
            return {
                ...state,
                input:action.input
            }
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo=> todo.id === action.id ? {...todo, done:!todo.done}:todo)
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.id)
            }
        default:
            return state;
    }
}

export default todos;