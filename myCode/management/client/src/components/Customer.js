import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component{ 
    //기본적으로 React.Component는 props를 포함하고 있음
    //함수형 컴포넌트의 경우 별도의 매개변수를 생성해 활용했음 props.name / props.age ...
    render(){ 
       return( 
           <TableRow>
               <TableCell>{this.props.id}</TableCell>
               <TableCell><img src={this.props.image} alt="profile"/></TableCell>
               <TableCell>{this.props.name}</TableCell>
               <TableCell>{this.props.age}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
               <TableCell>{this.props.job}</TableCell>
           </TableRow>
        )
    }
}

// class CustomerProfile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile"/>
//         <h2>{this.props.name} ({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component{
//     render(){
//         return (
//             <div>
//             <p>{this.props.age}</p>
//             <p>{this.props.gender}</p>
//             <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }

export default Customer