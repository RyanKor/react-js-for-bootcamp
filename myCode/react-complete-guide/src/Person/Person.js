import React from 'react';


const person = (props)=>{
    console.log(props)
return (<div><h1>I'm a {props.name}. My age is {props.age}</h1>
<h1>{props.children}</h1>
    </div>
)
}

export default person