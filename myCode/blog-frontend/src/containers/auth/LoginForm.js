import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {changeField, initializeForm, login} from '../../modules/auth'
import AuthForm from '../../components/auth/AuthForm'
import {check} from '../../modules/user'

const LoginForm = ({history})=>{
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const {form, auth, authError, user} = useSelector(({auth, user}) =>({
        form: auth.login,
        auth : auth.auth,
        authError: auth.authError,
        user: user.user
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
        const {username, password} = form
        dispatch(login({username,password}))
    }
    useEffect(()=>{
        dispatch(initializeForm('login'))
        //로그인이 진행된 이후, 로그인 시도할 때 입력했던 개인정보 삭제
    }, [dispatch])

    useEffect(()=>{
        if(authError){
            console.log("error occured!")
            console.log(authError)
            setError('Login Failed')
            return;
        }
        if(auth){
            console.log("Signup Success!")
            dispatch(check())
        }
    }, [auth,authError, dispatch])

    useEffect(()=>{
        if(user){
            history.push('/')
        }
    }, [history,user])

    return(
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSumbit={onSumbit}
        error={error}
        />
    )
}

export default withRouter(LoginForm) 