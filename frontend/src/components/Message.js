import React, { Component } from 'react'

 class Message extends Component {
    constructor() {
        super()
        
     
     
        this.state  ={
         message:'Welcome to ShopOnline'
        }
       }
       changeMessage()
       {
        this.setState({
            message:'Thanks For Visiting.'
        })
       }
       render() {
    return (
      <div><center>
       
        <h3>{this.state.message}</h3>
        <button onClick={()=>this.changeMessage()}>Start Billing..</button>
        
      </center></div>
    )
  }
}

export default Message