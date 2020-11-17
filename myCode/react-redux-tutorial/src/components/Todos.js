import React from 'react'

const TodoItem = ({todo, onToggle, onRemove})=>{
    return (
        <div>
            <input type="checkbox" />
            <span>Example</span>
            <button>Delete</button>
        </div>
    )
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) =>{
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button>Register</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default Todos;