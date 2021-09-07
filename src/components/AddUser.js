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
  const classes = usestyle();
  return (
    <div>
      <h2>Hello Add user</h2>
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input name="name" onChange={(e)=>{setname(e.target.value)}}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input />
        </FormControl>
        <Button variant="contained" color="primary">
          Add User
        </Button>
      </FormGroup>
    </div>
  );
};
