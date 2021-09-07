
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




 import { Table, TableBody, TableCell, TableHead, TableRow,makeStyles } from '@material-ui/core'
 import React from 'react'
 import { useEffect,useState } from 'react'
 export default function AllUser() {
     const [users, setusers] = useState([])
     useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then(response=>{response.json().then((result=>{
          setusers(result)

       }))})     })
     const usestyle = makeStyles({
         table: {
             width:"90%",
             margin:"50px 0 0 50px"
         },
         thead :{
             "& > *": {
                background:"black",
                color:"white",
                fontSize:"20px"
               },
         }

     })
     const classes = usestyle();
     return (

         <div>
             <Table className={classes.table}>
                 <TableHead >
         <TableRow className={classes.thead}>
             <TableCell>Id</TableCell>
             <TableCell>Name</TableCell>
             <TableCell>Email</TableCell>
             <TableCell>Address</TableCell>
             <TableCell>Phone No :</TableCell>
         </TableRow>
         </TableHead>
         <TableBody>
         {
               users.map(user=>{
                   return(
                  <TableRow>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.address}</TableCell>
                      <TableCell>{user.phone}</TableCell>

                  </TableRow>
                   )

               })
 }
         </TableBody>

 </Table>
         </div>
     )
 }