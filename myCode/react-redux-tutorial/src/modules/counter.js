import {createAction, handleActions} from 'redux-actions'

//action type definition
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//action 생성함수
export const increase = createAction(INCREASE) 
export const decrease = createAction(DECREASE) 


//초기 상태 & reducer function 생성

const initialState = {
    number: 0
}

//방법 1 : 리듀서 사용법
// function counter(state=initialState, action){
//     switch(action.type){
//         case INCREASE:
//             return { 
//                 number : state.number +1
//             }
//         case DECREASE:
//             return { 
//                     number : state.number -1
//             }
//         default:
//             return state
//     }
// }

const counter = handleActions(
    {
        [INCREASE]: (state,action)=>({number:state.number + 1}),
        [DECREASE]: (state,action)=>({number:state.number - 1}),
    },
    initialState,
)

export default counter;