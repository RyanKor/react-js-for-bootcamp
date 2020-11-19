import React, {useCallback} from 'react'
import {bindActionCreators} from 'redux'
import {connect, useSelector, useDispatch} from 'react-redux'
import Counter from '../components/Counter'
import {increase, decrease} from '../modules/counter'


// const CounterContainer = ({number,increase, decrease})=>{
//     return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
// }

const CounterContainer = () => {
    const number = useSelector(state=>state.counter.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=>dispatch(increase()))
    const onDecrease = useCallback(()=>dispatch(decrease()))
    return <Counter 
    number={number}
    onIncrease = {onIncrease}
    onDecrease = {onDecrease}
     />
}

// const mapStateToProps = state =>({
//     number : state.counter.number
// })


// 방법 1 : 기본

// const mapDispatchToProps = dispatch =>({
//     increase: ()=>{
//         dispatch(increase())
//     },
//     decrease: ()=>{
//         dispatch(decrease())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)

//방법2 : connect 메소드 내부에 익명함수로 선언한다.

// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     dispatch => ({
//         increase: ()=> dispatch(increase()),
//         decrease: ()=> dispatch(decrease())
//     })
// )(CounterContainer)


//방법 3 : bindActionCreator 메소드를 활용한다 (redux 모듈 제공)

// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     dispatch => bindActionCreators(
//         {
//             increase,
//             decrease
//         },
//         dispatch,
//     )
// )(CounterContainer)


// 방법 4 : 두번째 parameter값을 객체 형태로 넣으면 bindActionCreator를 대신한다.

// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     {
//         increase,
//         decrease
//     },

// )(CounterContainer)



export default CounterContainer