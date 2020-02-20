import React, { useState } from "react";

//함수형 컴포넌트
const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="Enter any value"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

// class EventPractice extends Component {
//   state = {
//     message: "",
//     username: ""
//   };
//   handlechange = e => {
//     this.setState({
//       [e.target.name]: e.target.value // 객체 안에서 key를 []로 감싸면, 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다.
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ":" + this.state.message);
//     this.setState({
//       username: "",
//       message: ""
//     });
//   };

//   handleKeyPress = e => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   }; //key press가 click과 같은 역할하게끔 보조함

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="Enter any value"
//           value={this.state.message}
//           onChange={this.handlechange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handlechange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

export default EventPractice;
