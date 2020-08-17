# Udemy React 강의 학습 내용 정리

## 학습 내용 정리

### 1. JSX의 명확한 쓰임새에 대해서 (2020.08.17)

- 멋쟁이사자처럼 2기 직장인을 마무리하는 과정에 시간을 할애하는 시간이 많아져서, 최근 javascript강의 학습을 하는 시간이 많이 줄었다.

- 나태해지지말자. 언제나 마음가짐은 19살 수능 시험을 준비하는 사람이 되어야한다.

- Youtube, 주식, 암호화폐 관련 내용들은 하루 중에 시간을 따로 빼서 여가 활동으로 보자.

- 생산성 있는 하루를 꾸준히 만들어야 30살까지 스탠포드를 간다.

- 3주 넘게 Django를 보다보니 (수강생 프로젝트 지도 목적) 리액트와 노드로 프로젝트하는 것을 소홀해지는 것 같다.

- JSX에 대해 다시 개념을 정리해보면, `JSX 자체는 HTML이 아니며 자바스크립트를 사용해서 HTML스럽게 (본문에는 HTMLish Code라는 형태로 번역) 코드를 작성`해서 `React.createElement() 코드를 Nested하지 않게 방지`하는 역할을 제공한다.

- 이중 for loop 마냥 코드가 베베 꼬여있는 모습을 생각하면 끔찍하다.

- 사용법은 함수형 프로그래밍과 클래스형 코드 작성할 때가 약간 다른데,

![../jsx.png]

- 함수형은 화살표 함수를 사용해서 `return`해주면 해당 태그 값을 볼 수 있다.

- 그러나 클래스를 사용할 땐 클래스 내부에 `render(){}`형태로 클래스 내부에 render라는 메소드를 구현해야한다.

- 약간의 차이는 있으나, 클래스 또는 함수 모두 JSX를 사용해야 지저분한 코드를 방지할 수 있다는 사실은 분명하다.

### 2. Props & State 정리 (2020.08.17)

- 빠르게 영상 보려고 하지 말고, 느리지만 하나씩 정확하게 봐야한다.

- `Props & State`는 `CORE concepts of React`라고 한다.

- 문맥을 좀 더 자세하게 살펴보니,

- Actually, only changes in props and/ or state `trigger React to re-render your components` and potentially `update the DOM in the browser`

- props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

- 데이터를 전달하고, 업데이트하는 중요한 기능을 담당하기 때문에 추후에 Redux나 Saga 등에서 해당 내용들은 다시 언급될 예정이다.

- 급하게 생각하지말자. 제대로 배우고 프로젝트한다고 생각하자.
