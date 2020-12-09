import {combineReducers} from 'redux'
import users, {usersSaga} from './users'
import {all} from 'redux-saga/effects'

export function* rootSaga(){
    yield all([usersSaga()])
}
//Redux-Saga Management.

const rootReducer = combineReducers({users})
export default rootReducer
