// import React, {Component} from 'react'
import React, {useState} from 'react'

// class EventPractice extends Component{
//     state = {
//         message : "",
//         username: ""
//     }
//     // constructor(props){
//     //     super(props)
//     //     this.handleChange = this.handleChange.bind(this)
//     //     this.handleClick = this.handleClick.bind(this)
//     // }
//     handleChange = (e)=>{
//         //여기서 핵심이 되는 코드
//         // 객체 안에서 key를 []로 감싸면, 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다.
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }
//     handleClick = ()=>{
//         alert(this.state.username + ": " + this.state.message)
//         this.setState({
//             //alert 메소드가 실행되고 난 후, message / username 상태 관리 값은 제거한다.
//             message:"",
//             username: ""
//         })
//     }
//     handleKeyPress = (e)=>{
//         if(e.key === "Enter"){
//             this.handleClick()
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input type="text" name="username" placeholder="사용자명" value={this.state.username} onChange={this.handleChange}/>
//                 <input type="text" name="message" placeholder="아무거나 입력해보세요" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         )
//     }
// }

const EventPractice = () =>{
    // const [username, setUsername] = useState('')
    // const [message, setMessage] = useState('')
    const [form, setForm] = useState({
        username: "",
        message: ""
    })
    const {username, message} = form
    // const onChangeUsername = e=> setUsername(e.target.value)
    // const onChangeMessage = e=> setMessage(e.target.value)
    const onChange = (e)=>{
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm)
    }
    const onClick = () =>{
        alert(username + ": " + message)
        setForm({
            username: "",
            message: "",
        })
    }
    const onKeyPress = (e)=>{
        if(e.key === "Enter"){
            onClick()
        }
    }
    return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange}/>
                <input type="text" name="message" placeholder="아무거나 입력해보세요" value={message} onChange={onChange} onKeyPress={onKeyPress}/>
                <button onClick={onClick}>확인</button>
            </div>
    )
}



export default EventPractice