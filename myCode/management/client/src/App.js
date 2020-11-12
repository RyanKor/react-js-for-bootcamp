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
import CircularProgress from '@material-ui/core/CircularProgress'


const styles = themes =>({
  root : {
    width: "100%",
    marginTop : themes.spacing.unit * 3,
    overflowX : 'auto'
  },
  table:{
    minWidth: 1080
  },
  progress: {
    margin: themes.spacing.unit * 2
  }
})

class App extends Component {
  state = {
    customers: "",
    completed: 0 //progress bar setting
  }
  componentDidMount(){
    this.timer = setInterval(this.progress, 20)
    this.callApi()
    .then(res =>this.setState({customers:res}))
    .catch(err=>console.log(err))
  }
  callApi = async()=>{
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }
  progress = ()=>{
    const {completed} = this.state
    this.setState({completed: completed >= 100 ? 0 : completed + 1})
  }
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
          this.state.customers ? this.state.customers.map(element=>{
            return(
            <Customer
              key={element.id} // key는 각 컴포넌트를 구분해주는 역할을 해준다.
              id={element.id}
              image={element.image}
              name={element.name}
              birthday={element.birthday}
              gender={element.gender}
              job={element.job}
            />)
          }
          ) : ""
        }
        <TableRow>
          <TableCell colSpan='6' align='center'>
            <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
        </Paper>
  );
}

}

export default withStyles(styles)(App);
