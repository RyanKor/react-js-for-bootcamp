import './App.css';
import React, {Component} from 'react'
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableRow'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'


const styles = themes =>({
  root : {
    width: "100%",
    marginTop : themes.spacing.unit * 3,
    overflowX : 'auto'
  },
  table:{
    minWidth: 1080
  }
})

const customer = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : 'ryan kim',
  'age' : '27',
  'gender' : 'man',
  'job' : 'software engineer'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '깽나니우스',
  'age' : '51',
  'gender' : 'woman',
  'job' : '가위손'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '로버트 깽나니우스 주니어',
  'age' : '25',
  'gender' : 'woman',
  'job' : '금융인'
}
]

class App extends Component {
  render(){  
    const {classes} = this.props;
    return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
        {
          //map 함수는 React의 불변성을 유지해주는 유용한 JS 메소드다.
          //다만, map을 활용할 땐, 반드시 key라는 속성을 넣어줘야한다.
          customer.map(element=>{
            return(
            <Customer
              key={element.id} // key는 각 컴포넌트를 구분해주는 역할을 해준다.
              id={element.id}
              image={element.image}
              name={element.name}
              age={element.age}
              gender={element.gender}
              job={element.job}
            />)
          }
          )
        }
        </TableBody>
      </Table>
        </Paper>
  );
}

}

export default withStyles(styles)(App);