import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeField, initializeForm} from '../../modules/auth'
import AuthForm from '../../components/auth/AuthForm'

const LoginForm = ()=>{
    const dispatch = useDispatch()
    const {form} = useSelector(({auth}) =>({
        form: auth.login
    }))
    const onChange = e=>{
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: "login",
                key: name,
                value
            })
        )
    }
    const onSumbit = e =>{
        e.preventDefault()
    }
    useEffect(()=>{
        dispatch(initializeForm('login'))
        //로그인이 진행된 이후, 로그인 시도할 때 입력했던 개인정보 삭제
    }, [dispatch])
    return(
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSumbit={onSumbit}
        />
    )
}

export default LoginForm