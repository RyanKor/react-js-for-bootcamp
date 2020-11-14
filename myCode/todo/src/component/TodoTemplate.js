import React from 'react'
import './TodoTemplate.scss'


const TodoTemplate = ({children})=>{ // <>OOO</> 태그 값 사이의 값이 child
    return (
        <div className="TodoTemplate">
            <div className="app-title">Schedule Management</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate