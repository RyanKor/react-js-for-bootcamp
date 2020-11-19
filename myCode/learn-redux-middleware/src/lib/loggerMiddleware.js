const loggerMiddleware = store => next => action =>{
    console.group(action && action.type)
    console.log('ex-state', store.getState())
    console.log('action', action)
    next(action)
    console.log('next stage', store.getState())
    console.groupEnd()
}

export default loggerMiddleware