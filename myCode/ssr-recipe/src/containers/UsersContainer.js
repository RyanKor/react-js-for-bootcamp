import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Users from '../components/Users'
import {getUser} from '../modules/users'
import {Preloader, usePreloader} from '../lib/PreloadContext'

//서버 사이드 렌더링에서는 이미 있는 정보를 재요청하지 않게 처리하는 작업이 중요하다.

const UsersContainer = ({id})=>{
    const user = useSelector(state=>state.users.user)
    const dispatch = useDispatch()
    // useEffect(()=> {
    //     if(user && user.id === parseInt(id,10)) return;
    //     dispatch(getUser(id))
    // }, [dispatch,id,user])
    // if(!user){
    //     return (
    //         <Preloader resolve={()=>dispatch(getUser(id))} />
    //     )
    // }else{
    //     return (
    //             <Users user={user} />
    //         )
    // }
    usePreloader(()=> dispatch(getUser(id)))
    useEffect(()=>{
        if(user && user.id === parseInt(id,10)) return;
        dispatch(getUser(id))
    }, [dispatch,id,user])
    if(!user) return null;
    return <Users user={user} />
}

export default UsersContainer