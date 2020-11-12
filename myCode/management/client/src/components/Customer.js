import React, {Component} from 'react'
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
               <TableCell>{this.props.birthday}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
               <TableCell>{this.props.job}</TableCell>
           </TableRow>
        )
    }
}

export default Customer