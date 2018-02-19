import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import NotFound from '../pages/NotFound.jsx';

import Employees from '../pages/Employees.jsx';
import Tasks from '../pages/Tasks.jsx';
import AssignTasks from '../pages/AssignTasks.jsx';
import Performance from '../pages/Performance.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header />
              <Switch>
                <Route exact path='/' component={Home} />                
                <Route path = '/employees' component={Employees} />
                <Route path = '/tasks' component={Tasks} />
                <Route path = '/performance' component={Performance} />
                <Route path = '/assigntasks' component={AssignTasks} />
                <Route path = '/about' component={About} />
                <Route component={NotFound} />
              </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
