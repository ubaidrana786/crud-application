import React from 'react'
import {
    Button,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    makeStyles,
  } from "@material-ui/core";
 
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
export default function Update() {
    const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState("")
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
      <Button  variant="contained" color="primary">
          Update User
        </Button>
      </FormGroup>
        </div>
    )
}
