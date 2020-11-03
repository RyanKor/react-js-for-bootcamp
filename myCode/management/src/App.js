import './App.css';
import Customer from './components/Customer'


const customer = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : 'ryan kim',
  'age' : '27',
  'gender' : 'man',
  'job' : 'software engineer'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '깽나니우스',
  'age' : '51',
  'gender' : 'woman',
  'job' : '가위손'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '로버트 깽나니우스 주니어',
  'age' : '25',
  'gender' : 'woman',
  'job' : '금융인'
}
]

function App() {
  return (

    // <Customer
    // id={customer[0].id}
    // image={customer[0].image}
    // name={customer[0].name}
    // age={customer[0].age}
    // gender={customer[0].gender}
    // job={customer[0].job}
    // />

    <div>
    {
      //map 함수는 React의 불변성을 유지해주는 유용한 JS 메소드다.
      //다만, map을 활용할 땐, 반드시 key라는 속성을 넣어줘야한다.
      customer.map(element=>
        <Customer
        key={element.id} // key는 각 컴포넌트를 구분해주는 역할을 해준다.
        id={element.id}
        image={element.image}
        name={element.name}
        age={element.age}
        gender={element.gender}
        job={element.job}
        />
      )
    }
        </div>
  );
}

export default App;
