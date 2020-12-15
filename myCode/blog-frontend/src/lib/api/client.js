import axios from 'axios'
const client = axios.create()



/*
글로벌 설정 예시

// API 주로를 다른 곳으로 사용함
client.defaults.baseURL = 'https://sample.com'

//header setting
client.defaults.headers.common["Autorization"] = 'Bearer alb2c3d4'


// 인터셉터
axios.intercepter.response.use(\
    resposne =>{
        return response;
    },
    error=>{
        return Promise.reject(error)
    }
    )

*/

export default client