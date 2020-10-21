import React, {Component} from 'react';

class Counter extends Component{
    // 방법 1
    // constructor(props){
    //     super(props) // class형 컴포넌트에서 constructor를 작성하면, 반드시 super를 호출해줘야한다.
    //     this.state ={
    //         number : 0,
    //         fixedNumber :0,
    //     }
    // }
    // 방법 2
    state ={
        number : 0,
        fixedNumber :0,
    }
    render(){
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber}</h2>
                {/* <button onClick={()=>{
                    // setState를 사용하면 업데이트 상태가 비동기적으로 진행된다.
                    // this.setState({number:number+1})
                    // this.setState({number:this.state.number+1}) 

                    // 아래의 코드는 위의 this.setState와 동일한 기능을 하는 코드입니다.
                    // prevState는 기존 상태 값입니다.
                    this.setState(prevState =>{
                        return {
                            number:prevState.number + 1
                        }
                    })
                    // 또다른 동일한 코드
                    this.setState(prevState =>({
                            number:prevState.number + 1
                        })
                    )
                }}>+1</button> */}
                <button onClick={()=>{
                    this.setState({
                        number: number + 1
                    },
                    // setState를 사용해 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두번째 파라미터로 콜백 함수를 등록해 작업을 처리할 수 있다.
                    ()=>{
                        console.log('방금 setState가 호출되었습니다.')
                        console.log(this.state)
                    })
                }}>+1</button>
            </div>
        )
    }
}

export default Counter