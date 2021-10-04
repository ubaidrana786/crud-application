
import {
    Button,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    makeStyles,
  } from "@material-ui/core";
  import React from "react";
  import { useState } from "react";

  const usestyle = makeStyles({
    formwidth: {
      width: "50%",
      margin: "5% 0 0 25%",
      "& > *": {
        marginTop: "20px",
      },
    },
  });
  const login = ()=>{
      console.log(setname)
  }
export default function Login() {
    const [user, setuser] = useState({
      name :"",
      pass:"",
    })
    const {name , pass} = user;
    
    return (
        <div>

      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input value={name} onChange={e=>{setname(e.target.value)}}/>
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input value={pass} onChange={e=>{setpass(e.target.value)}}/>
        </FormControl>
        <Button onClick={login} variant="contained" color="primary">
         Log in
        </Button>
      </FormGroup>
        </div>
    )
}
// import React, { Component } from 'react'

// export default class Login extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name:"",
//        password:""
//     }
//   }
  
//   login = ()=>{
//     console.warn(this.state)
//     fetch("http://localhost:3000/login",{
//       method:"post",
//       headers:{
//         'content-type':'application/json'
//       },
//       body: JSON.stringify(this.state)
//     }
     
//     ).then((response)=>{
//       response.json().then((result)=>{
//         alert("form has been submitted")
//       })
//     })
//   }
  
//   render() {
    
//     return (
//       <div style={{textAlign:"center"}}>
//       <input type="text" name="user" onChange={(e)=>{this.setState({name:e.target.value})}} /><br/><br/>
//       <input type="password" name="password"  onChange={(e)=>{this.setState({password:e.target.value})}} /><br/><br/>
//       <button type="submit" onClick={()=>this.login()}>Log in</button>
//       </div>
//     )
//   }
// }
