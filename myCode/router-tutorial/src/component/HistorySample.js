import React, { Component } from 'react'

class HistorySample extends Component{
    handleGoBack = ()=>{
        this.props.history.goBack()
    }
    handleGoHome = ()=>{
        this.props.history.push('/')
    }
    componentDidMount(){
        this.unblock = this.props.history.block('Leave Now?')
    }
    componentWillUnmount(){
        if(this.unblock){
            this.unblock()
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.handleGoBack}>Go Back</button>
                <button onClick={this.handleGoHome}>Home</button>
            </div>
        )
    }
}

export default HistorySample