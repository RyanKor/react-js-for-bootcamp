import React, { useState } from "react";

//constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드이다.
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" }
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText(" ");
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;

// 리액트에서 key를 입력하면 virtual DOM에서 변화를 감지하고
// 리스트를 순차적으로 비교하는데 더욱 빠르게 알아내게 도와주는 일을 한다.
// push vs concat
// Push 는 기존 배열 자체를 변경해주는 업무를 담당하고,
//
