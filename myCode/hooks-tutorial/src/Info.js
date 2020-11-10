import React, {useReducer} from 'react'

// useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.

// const Info =()=>{
//     const [name, setName]= useState('')
//     const [nickname, setNickname] = useState('')

//     useEffect(()=>{
//         console.log('effect')
//         console.log(name)
//         return ()=>{
//             console.log('cleanup')
//             console.log(name)
//         }
//     }, [name]) // 2번째 인자가 갖는 의미 => 업데이트 될 때 실행 안되게 하려면 두번째 인자를 빈 배열로 넣는다.

//     const onChangeName= e =>{
//         setName(e.target.value)
//     }
//     const onChangeNickname = e=>{
//         setNickname(e.target.value)
//     }
//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname}/>
//             </div>
//             <div>
//                 <div>
//                     <b>Name : </b> {name}
//                 </div>
//                 <div>
//                     <b>NickName : </b> {nickname}
//                 </div>
//             </div>
//         </div>

//     )
// }

function reducer(state,action){
    return{
        ...state,
        [action.name] : action.value
    }
}

const Info =()=>{
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        nickname: ""
    })
    const {name, nickname} = state;
    const onChange = e =>{
        dispatch(e.target)
    }
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>Name : </b> {name}
                </div>
                <div>
                    <b>NickName : </b> {nickname}
                </div>
            </div>
        </div>

    )
}

export default Info