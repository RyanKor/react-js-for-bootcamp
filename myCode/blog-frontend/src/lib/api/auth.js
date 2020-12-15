import client from './client'

export const login = ({username, passowrd})=>
    client.post('/api/auth/login', {username, passowrd})


export const register = ({username, password})=>
    client.post('/api/auth/register', {username, password})

export const check = ()=> client.get('/api/auth/check')