import React, {Component} from 'react'

/*
React Life Cycle을 이해하기 매우 좋은 코드 예제
*/

class LifeCycleSample extends Component{
    state = {
        number : 0,
        color :null,
    }
    myRef = null;
    constructor(props){
        super(props) // 부모로부터 받은 속성 값을 class 컴포넌트를 사용할 땐 반드시 사용한다.
        console.log('constructor')
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps')
        if(nextProps.color !== prevState.color){
            return {color:nextProps.color} //객체로 반환한다.
        }
        return null
    }
    componentDidMount(){
        console.log('componentDidMount')
        // 특정 동작이 끝난 "후에" 작동하는 메소드
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldCompoentUpdate', nextProps, nextState)
        return nextState.number % 10 !==4;
        //컴포넌트의 상태 값을 업데이트 할 때 사용한다
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
        // 특정 동작이 시작 "전에" 작동하는 메소드
    }
    handleClick = ()=>{
        this.setState({number: this.state.number + 1})
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color
        }
        return null
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('componentDidUpdate', prevProps, prevState)
        if(snapShot){
            console.log('previous color before update : ', snapShot)
        }
    }
    render(){
        console.log('render')
        const style = {
            color : this.props.color
        }
        return (
            <div>
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>
                    color :{this.state.color}
                </p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample