import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import {StaticRouter} from 'react-router-dom'
import App from './App'
import path from 'path'
import fs from 'fs'
import {createStore, applyMiddleware} from 'redux' // redux -> store / index.server.js
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer, {rootSaga} from './modules'
import PreloadContext, { Preloader } from './lib/PreloadContext'
import createSagaMiddleware from 'redux-saga' // Saga Import
import {END} from 'redux-saga'

const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
) // File Path Designation


const chunks = Object.keys(manifest.files)
.filter(key=>/chunks\.js$/.exec(key))
.map(key=>`<script src="${manifest.files[key]}"></script>`)
.join('')

function createPage(root, stateScript){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <title>React App</title>
    <link href="${manifest.files['main.css']}" rel="stylesheet" />
</head>
<body>
    <noscript> You need to enable Javascript to run this app. </noscript>
    <div id="root">${root}</div>
    ${stateScript}
    <script src="${manifest.files['runtime~main.js']}" ></script>
    ${chunks}
    <script src="${manifest.files['main.js']}"></script>
</body>
</html>
    `
}

const app = express()

//서버 사이드 렌더링을 처리할 함수다.
const serverRender = async (req,res,next)=>{
    const context = {}
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))
    const sagaPromise = sagaMiddleware.run(rootSaga).toPromise()
    const preloadContext = {
        done:false,
        promises: []
    }
    const jsx = (
        <PreloadContext.Provider value={preloadContext}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        </PreloadContext.Provider>
    )
    ReactDOMServer.renderToStaticMarkup(jsx)
    store.dispatch(END)
    try{
        await Promise.all(preloadContext.promises)
    }catch(e){
        return res.status(500)
    }
    preloadContext.done= true
    const root = ReactDOMServer.renderToString(jsx)
    const stateString = JSON.stringify(store.getState()).replace(/</g,'\\u003c')
    const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`
    res.send(createPage(root, stateScript))
}

const serve = express.static(path.resolve('./build'), {
    index:false
})

app.use(serve)
app.use(serverRender)

app.listen(5000,()=>{
    console.log('Running on port 5000')
})