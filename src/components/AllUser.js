// import React, { Component } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   makeStyles
// } from "@material-ui/core";

//   // const usestyle = makeStyles({
//   //       table: {
//   //         width: "90%",
//   //         margin: "50px 0 0 50px",
//   //       },
//   //       thead: {
//   //         "& > *": {
//   //           marginTop: "200px",
//   //         },
//   //       },
//   //     });

// export default class AllUser extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       list: [],
//     };
//   }
//   componentDidMount() {
//     fetch("http://localhost:3000/posts").then((response) => {
//       response.json().then((result) => {
//           this.setState({ list: result })
//       })
//   })
//   }

//   render() {
//     // const classes = usestyle();
//   return (
//        <div>

//          { <Table >
//            <TableHead>
//              <TableRow>
//                <TableCell>Id</TableCell>
//                <TableCell>Name</TableCell>
//                <TableCell>Email</TableCell>
//                <TableCell>Address</TableCell>
//                <TableCell>Phone No :</TableCell>
//              </TableRow>
//            </TableHead>
//            <TableBody>
//              {this.state.list.map((user) => {
//                return (
//                  <TableRow>
//                    <TableCell>{user.id}</TableCell>
//                    <TableCell>{user.name}</TableCell>
//                    <TableCell>{user.email}</TableCell>
//                    <TableCell>{user.address}</TableCell>
//                    <TableCell>{user.phone}</TableCell>
//                  </TableRow>
//                );
//              })}
//            </TableBody>
//          </Table> }
//        </div>
//     );
//   }
// }

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Notecontaxt from "./Contaxt/Notecontaxt";
export default function AllUser() {
  const [users, setusers] = useState([]);
  useEffect(() => {
   adduserdata()
  },[]);
 const adduserdata = ()=>{
  fetch("http://localhost:3000/posts").then((response) => {
    response.json().then((result) => {
      setusers(result);
    });
  });
 }
  function  Delete (id){
   fetch("http://localhost:3000/posts/"+ id ,{
    method: "DELETE",
   } ).then((response)=>{
       response.json().then((result)=>{
           alert("Dlete this")
           adduserdata()
          
       })
   })
  }
  const usestyle = makeStyles({
    table: {
      width: "90%",
      margin: "50px 0 0 50px",
    },
    thead: {
      "& > *": {
        background: "black",
        color: "white",
        fontSize: "20px",
      },
    },
  });
  const a = useContext(Notecontaxt)
  const classes = usestyle();
  return (
    <div>
      <h1>This is a contaxt api {a.name} and calss name is {a.class}</h1>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone No :</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.phone}</TableCell>
                
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={()=>Delete(user.id)}>
                    Dlete
                  </Button>
                  <Button variant="contained" color="primary" style={{marginLeft:"5px"}} >
                  <Link style={{color:"white",textDecoration:"none"}} to={"/update/" + user.id}> Edit</Link>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
