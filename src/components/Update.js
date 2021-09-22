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
  import { useEffect } from 'react';
  import { useParams } from 'react-router';
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
  const {id} = useParams()
  useEffect(() => {
    fetch('http://localhost:3000/posts/'+id).then((response) => {
      response.json().then((result) => {
          console.warn(result)
      setname({ 
               name:result.name,
            })
      })
  })
  })
  const update = ()=>
  {
      fetch('http://localhost:3000/posts/'+id, {
          method: "PATCH",
          headers:{
              'Content-Type':'application/json'
          },
          body: JSON.stringify(name)
      }).then((result)=>{
          result.json().then((resp)=>{
              alert("Restaurant has heen Update")
          })
      })
  }
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
      <Button  variant="contained" color="primary" onClick={update}>
          Update User
        </Button>
      </FormGroup>
        </div>
    )
}
