import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import {StaticRouter} from 'react-router-dom'
import App from './App'

const app = express()

//서버 사이드 렌더링을 처리할 함수다.
const serverRender = (req,res,next)=>{
    const context = {}
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )
    const root = ReactDOMServer.renderToString(jsx)
    res.render(root)
}

app.use(serverRender)

app.listen(5000,()=>{
    console.log('Running on port 5000')
})