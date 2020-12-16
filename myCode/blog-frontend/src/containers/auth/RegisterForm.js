import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {changeField, register,initializeForm} from '../../modules/auth'
import AuthForm from '../../components/auth/AuthForm'
import {check} from '../../modules/user'

const RegisterForm = ({history})=>{
    const dispatch = useDispatch()
    const {form, auth, authError, user} = useSelector(({auth, user})=>({
        form : auth.register,
        auth : auth.auth,
        authError: auth.authError,
        user: user.user
    }))
    const onChange = (e)=>{
        const {value, name}= e.target;
        dispatch(
            changeField({
                form:'register',
                key:name,
                value
            })
        )
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        const {username, password, passwordConfirm} = form
        if(password !== passwordConfirm){
            return;
        }
        dispatch(register({username, password}))
    }

    useEffect(()=>{
        dispatch(initializeForm('register'))
    }, [dispatch])
    useEffect(()=>{
        if(authError){
            console.log("error occured!")
            console.log(authError)
            return;
        }
        if(auth){
            console.log("Signup Success!")
            console.log(auth)
            dispatch(check())
        }

    }, [auth,authError, dispatch])

    useEffect(()=>{
        if(user){
            console.log("Check API Success!")
            console.log(user)
        }
    }, [user])

    useEffect(()=>{
        if(user){
            history.push('/')
        }
    }, [history,user])
    return(
        <AuthForm 
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    )
}
export default RegisterForm