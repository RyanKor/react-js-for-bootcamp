import React, {useReducer} from 'react' // {Component}를 쓰는 것과 대조적

// const Counter = ()=>{
//     const [value, setValue] = useState(0)
//     return (
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{value}</b> 입니다.
//             </p>
//             <button onClick={()=>setValue(value+1)}>+1</button>
//             <button onClick={()=>setValue(value-1)}>-1</button>
//         </div>
//     )
// }

function reducer (state,action){
    switch(action.type){
        case "INCREMENT":
            return {value : state.value +1}
        case "DECREMENT":
            return {value : state.value -1}
        default:
            return false
    }
}

const Counter = ()=>{
    const [state, dispatch] = useReducer(reducer, {value:0})
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+1</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-1</button>
        </div>
    )
}

export default Counter;