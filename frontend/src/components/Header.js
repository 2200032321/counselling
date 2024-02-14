import React, { useState } from 'react'
import {AppBar, Icon, Toolbar, Tabs, Tab, Typography} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import {NavLink} from 'react-router-dom'


const Header = () => {
  const [value, setValue]=useState()
  return (
    <div>
    <AppBar sx={{backgroundColor:"purple"}} position='sticky'>
     <Toolbar> 
     <SchoolIcon/>
    <Typography>Counseling System and Visitor Management System</Typography>
    <Tabs textColor='inherit' indicatorColor='primary' sx={{ml:"auto"}} value={value}
      onChange={(e,val)=>setValue(val)} >
      <Tab LinkComponent={NavLink} to='/signup' label='signup'/>
      <Tab LinkComponent={NavLink} to='/signin' label='signin'/>
      <Tab LinkComponent={NavLink} to='/counsellor' label='Counsellor'/>
      <Tab LinkComponent={NavLink} to='/visitor' label='Visitor'/>
      <Tab LinkComponent={NavLink} to='/appointment' label='Appointment'/>
      <Tab LinkComponent={NavLink} to='/contact' label='Contact'/>
    </Tabs>
    </Toolbar>
    </AppBar>
   
    </div>
  )
}

export default Header