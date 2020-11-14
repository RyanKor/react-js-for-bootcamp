import React from 'react'
import {MdAdd} from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = () =>{
    return(
        <form className="TodoInsert">
            <input placeholder="Write what you do"/>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert