import React, {useState} from 'react'

const Say = ()=>{
    const [message, setMessage] = useState('')
    const onClickEnter = ()=> setMessage('안녕하세요!')
    const onClickLeave = ()=> setMessage('Good Bye!')

    // 한 개의 컴포넌트에 상태 관리를 위해 여러개의 useState를 사용하는 것은 전혀 문제가 되지 않는다.
    const [color, setColor] = useState('black')

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={()=>setColor('red')}>빨간색</button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>초록색</button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>파란색</button>
        </div>
    )
}

export default Say