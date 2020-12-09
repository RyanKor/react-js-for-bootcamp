import {createContext, useContext} from 'react' // react Hooks -> Context API


//client setting : null
//server environment : {done:false, promises:[]}
const PreloadContext = createContext(null)
export default PreloadContext

export const Preloader = ({resolve})=>{
    const preloadContext = useContext(PreloadContext)
    if(!preloadContext) return null;
    if(preloadContext.done) return null
    preloadContext.promises.push(Promise.resolve(resolve()))
    return null
}


//usePreloade
export const usePreloader = resolve => {
    const preloadContext = useContext(PreloadContext)
    if(!preloadContext) return null;
    if(preloadContext.done) return null
    preloadContext.promises.push(Promise.resolve(resolve()))
}