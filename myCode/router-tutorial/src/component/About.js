import React from 'react'
import qs from 'qs'

const About = ({location})=>{
    const query = qs.parse(location.search, {
        ignoreQueryPrefix:true //url 문자열 앞의 ? 를 생략한다.
    })
    const showDetail = query.detail === 'true';
    return(
        <div>
            <h1>About Us</h1>
            <p>React Router Example Project</p>
            {showDetail && <p>detail = true setting completed</p>}
        </div>
    )
}
export default About