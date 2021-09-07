


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
          </Toolbar>
        </AppBar>
        <Switch>
         
          
          <Route exact path="/add">
            <AddUser />
          </Route>
          <Route exact path="/all">
            <AllUser/>
          </Route>
          <Route exact path="/" >
             <CodeFor />
          </Route>
          <Route  >
             <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
