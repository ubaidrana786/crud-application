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

export const AddUser = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/posts",{
      method:"post",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({name,email,address,phone})
    }).then((response)=>{
      response.json().then((result)=>{
        alert("form has been submitted")
      })
    })
    
}
 
  const classes = usestyle();
  return (
    <div>
      
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input value={name} onChange={e=>{setname(e.target.value)}}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input value={email} onChange={e=>{setemail(e.target.value)}} />
        </FormControl>
        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input value={address} onChange={e=>{setaddress(e.target.value)}} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input value={phone} onChange={e=>{setphone(e.target.value)}} />
        </FormControl>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add User
        </Button>
      </FormGroup>
    </div>
  );
};
