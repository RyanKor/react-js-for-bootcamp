import React, {Component} from 'react'
import LifeCycleSample from './LifeCycleSample'
import ErrorBoundary from './ErrorBoundary'
import './App.css';


function getRandomColor (){
  return '#' + Math.floor(Math.random()*1677215).toString(16)
}
class App extends Component{
  state = {
    color: '#000000'
  }
  handleClick = ()=>{
    this.setState({
      color : getRandomColor()
    })
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>
          Random color
        </button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
