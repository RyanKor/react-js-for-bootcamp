import React, {useState} from 'react'
import Counter from './Counter'
import Info from './Info'
import Average from './Average'

// function App() {
//   const [visible, setVisible] = useState(false)
//   return (
//     <div>
//       <button onClick={()=>{
//         setVisible(!visible)
//       }}>
//         {visible ? 'hide' : 'visible'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// }

function App() {
  return <Average />
}

export default App;
