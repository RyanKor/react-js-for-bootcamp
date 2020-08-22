import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";
import "./App.css";

// 기존에 react-router-dom을 사용하지 않는 경우
// class App extends Component {
//   state = {
//     pageName: "",
//   };
//   componentDidMount() {
//     window.onpopstate = function (event) {
//       console.log(`location : ${document.location}, statc: ${event.state}`);
//     };
//   }
//   onChange = (pageName) => {
//     this.setState({ pageName });
//   };
//   onClick1 = () => {
//     const pageName = "page1";
//     window.history.pushState(pageName, "", "/page1");
//     this.onChange(pageName);
//   };
//   onClick2 = () => {
//     const pageName = "page2";
//     window.history.pushState(pageName, "", "/page2");
//     this.onChange(pageName);
//   };

//   render() {
//     const { pageName } = this.state; //비구조화 할당
//     return (
//       <div>
//         <button onClick={this.onClick1}>page1</button>
//         <button onClick={this.onClick2}>page2</button>
//         {!pageName && <Home />}
//         {pageName === "page1" && <Page1 />}
//         {pageName === "page2" && <Page2 />}
//       </div>
//     );
//   }
// }

// function Home() {
//   return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요 </h2>;
// }
// function Page1() {
//   return <h2>여기는 Page1 </h2>;
// }
// function Page2() {
//   return <h2>여기는 Page2 </h2>;
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: 20, border: "5px solid gray" }}>
          <Link to="/">홈</Link>
          <br />
          <Link to="/photo">사진</Link>
          <br />
          <Link to="/rooms">방 소개</Link>
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/photo" component={Photo} />
          <Route path="/rooms" component={Rooms} />
        </div>
      </BrowserRouter>
    );
  }
}

function Home({ math }) {
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요 </h2>;
}
function Photo({ math }) {
  return <h2>사진은 여기입니다.</h2>;
}

export default App;
