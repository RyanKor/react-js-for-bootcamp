import React from 'react'

class Customer extends React.Component{ 
    //기본적으로 React.Component는 props를 포함하고 있음
    //함수형 컴포넌트의 경우 별도의 매개변수를 생성해 활용했음 props.name / props.age ...
    render(){ 
       return( 
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.age}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }
}

export default Customer