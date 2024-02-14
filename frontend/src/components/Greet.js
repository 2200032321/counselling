import React, { Component } from 'react'
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
export class Greet extends Component {
  render() {
    return (
        <div><center><h1> <ComputerRoundedIcon/> {this.props.name} <ComputerRoundedIcon/> </h1></center></div>
        )
  }
}

export default Greet