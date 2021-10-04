


import { CodeFor } from "./components/CodeFor";

import { AddUser } from "./components/AddUser";

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { AppBar, Toolbar,makeStyles } from "@material-ui/core";
import AllUser from "./components/AllUser";
import NotFound from "./components/NotFound";
import Update from "./components/Update";
import Login from "./components/Login";
import Notestate from "./components/Contaxt/Notestate";
const usestyles = makeStyles({
  header: {
    backgroundColor: "black",
  },
  tabs: {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontSize: "20px",
  },
});
function App() {
  const classes = usestyles();
  return (
    <div className="App">
      <Notestate>
      <BrowserRouter>
        <AppBar className={classes.header} position="static">
          <Toolbar>
            <NavLink exact to="/" className={classes.tabs}>
              
              Code For User
            </NavLink>
           
            <NavLink exact to="add" className={classes.tabs}>
              Add User
            </NavLink>
            <NavLink exact to="all" className={classes.tabs}>
              All User
            </NavLink>
            <NavLink exact to="update" className={classes.tabs}>
              Update
            </NavLink>
            <NavLink exact to="login" className={classes.tabs}>
              Log In
            </NavLink>
          </Toolbar>
        </AppBar>
        <Switch>
         
          
          <Route exact path="/add">
            <AddUser />
          </Route>
          <Route exact path="/all">
            <AllUser/>
          </Route>
          <Route exact path="/update/:id">
            <Update/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/" >
             <CodeFor />
          </Route>
          <Route  >
             <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
      </Notestate>
    </div>
  );
}

export default App;
