import { Task1, Task2 } from "pages";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/task1' />
        </Route>
        <Route path='/task1'>
          <Task1 />
        </Route>
        <Route path='/task2'>
          <Task2 />
        </Route>
      </Switch>
    </Router>
  );
};
