import './App.css';
import Customer from './components/Customer'


const customer = {
  'name' : 'ryan kim',
  'age' : '27',
  'gender' : 'man',
  'job' : 'software engineer'
}

function App() {
  return (
    <Customer
    name={customer.name}
    age={customer.age}
    gender={customer.gender}
    job={customer.job}
    />
  );
}

export default App;
