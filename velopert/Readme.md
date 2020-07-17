# 리액트를 다루는 기술

## 학습 기간

- 7일

- 일전에 리액트를 다루는 기술을 읽다가 중간에 그만뒀던 터라, 절반 정도 내용은 이해하고 있다.

---

## 학습 내용

### 앞단 내용 학습 (2020.07.12)

1.1 리액트의 이해

- 리액트는 View만을 신경쓰는 라이브러리다.
- 뷰를 `업데이트한다`라는 표현은 적절하지 않다. 리액트는 `조화과정을 거친다`는 표현이 더 정확하다.

  1.2 리액트의 특징

- Virtual DOM : 동적 UI에 최적화 되어 있지 않은 HTML문서에서 최소한으로 DOM을 조작해서 효율적인 업데이트를 추구하는 방식으로 발전해옴. 여기서 DOM에 접근해서 조작하는 대신 추상화한 자바스크립트 객체를 구성하는 형태가 `Virtual DOM`이다.

  2.2 JSX

- 가독성 측면도 그렇고 활용도 부분에 있어서도 그렇고 JSX를 사용하는 것을 리액트 공식문서에서도 권장하는 형태인 것 같다.

```javascript
//이 코드는 리액트에서 이렇게 변환된다.
function App() {
  return (
    <div>
      Hello <b>React</b>
    </div>
  );
}

//매번 코드를 작성할 때마다 자바스크립트에 있는 createElement 코드를 불러와서 작업할 수는 없다.
function App() {
  return React.createElement(
    "div",
    null,
    "Hello",
    React.createElement("b", null, "react")
  );
}
```

- JSX 문법을 활용한다는 것은 이미 Virtual DOM을 사용하고 있다는 의미이기도 하다.

- 화살표 함수와 `function` 차이를 구분

- this를 사용할 때, 화살표 함수는 `자신이 종속된 인스턴스`를 지칭하고, function에선 `자신이 종속된 객체`를 가리키고 있을 것이다.

```javascript
//app.js
import React from "React";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>리액트</MyComponent>;
  // 태그 안의 값을 받을 때는 props.children을 사용한다.
};
```

```javascript
//mycomponent.js
import React from "React";

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children} 입니다.
    </div>
  );
};

MyComponent.defaulutProps = {
  name: "기본 이름",
};

export default MyComponent;
```

- `this.setState()`는 state 안에 새로운 값을 추가할 때 사용한다.
- 상태를 바꿔주는 함수를 `setter function`이라 부른다.

### 라이프 사이클 이해하기(2020.07.17)

- 변명같이 들릴 수 있지만, 회사 일이 많다보니 저녁에 침대에 눕기만하면 잠드는 경우도 있다.

- 회사 일을 하면서 학습하는 게 이렇게 어려운 거구나!

`getDerivedStateFromProps`: 이 메소드는 마운트 과정에서도 호출되며, 업데이트가 시작되기 전에도 호출된다. props의 변화에 따라 state 값도 변화를 주고 싶을 때 사용한다.

`shouldComponentUpdate` : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메소드입니다. 이 메소드에는 true 혹은 false 값을 반환해야하며, true를 반환하면 다음 라이프 사이클 메서드를 계속 실행하고, false를 반환하면 작업을 중지합니다. 즉, 컴포넌트가 리렌더링되지 않습니다. 만약 특정 함수에서 this.forceUpdate() 함수를 호출한다면 이 과정을 생략하고 바로 render 함수를 호출합니다.

`render` : 컴포넌트를 리렌더링합니다.

`getSnapshopBeforeUpdate` : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메소드입니다.

`componentDidUpdate` : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메소드입니다.

`componentWillUnmount` : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메소드입니다.

`componentDidCatch` : 컴포넌트 렌더링 도중에 에러가 발생했을 경우 애플리케이션이 먹통이 되지 않고 오류 UI를 보여줄 수 있게 해줍니다.

- 위의 메소드들은 클래스에서만 사용한 라이프 사이클 메소드이고, 이를 대신해서 함수에서도 상태관리를 할 수 있게 작업하고자 `Hooks`가 도입되었다.

`useState` : 하나의 useState는 하나의 상태 값만 관리할 수 있다.

`useEffect` : 리액트 컴포넌트가 리렌더링 될 때마다 특정 작업을 수행하도록 설정하는 Hook. `componentDidMount`와 `componentDidUpdate`를 합친 형태로 봐도 무방하다.

`useReducer` : 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수다. `reducer` 함수와 `useReducer`의 차이가 어떻게 되는가?

`useMemo` : 함수형 컴포넌트 내에서 발생하는 연산을 최적화하는데 기여한다.

`useCallback` : 렌더링 성능을 최적화하는데 사용한다.

`useRef` : 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줍니다.

### 컴포넌트 성능 최적화하기(2020.07.17)

- 리액트 컴포넌트에서 상태를 업데이트할 때 불변성을 지키는 것은 매우 중요하다.
- 많은 데이터를 렌더링하는 경우, 최적화를 찾는 과정에서 `구글 개발자 도구`, 그리고 `useReducer`, `React.memo` 등 등을 사용해서 진행이 가능하다.
