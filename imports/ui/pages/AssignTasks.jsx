/**
     * Displays all the Employees and the user can assign Multiple Tasks as a tag
     * under an employe through the dropdown menu
**/

// React and Meteor libraries
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createContainer } from 'meteor/react-meteor-data';

// UI Components
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/content/clear';

// Components
import AssignTaskEmployee from './AssignTaskEmployee.jsx';


//connect to db
import { Employees } from '../../api/employees.js';
import { Tasks } from '../../api/tasks.js';

 const paperStyle = {
      width: "100%",
      padding: 10,
      textAlign: 'left',
      display: 'inline-block'
  };

  const styles = {
  paddingTop: '2%'
};

class AssignTasks extends React.Component {

  constructor(props) {
    super(props);
  }

  renderEmployees() {
    return this.props.employees.map((employee) => (
         <AssignTaskEmployee key={employee._id} employee={employee} tasks={this.props.tasks}  />
    ));
  }

  render() {
    return (
      <Grid fluid style={styles}>
        <Row>
          <Col xs={6} xsOffset={3}> 
            <Paper style={paperStyle} zDepth={1}  rounded={false}>
              <List>
                <Subheader><h4>Assign Tasks to Empoyees</h4></Subheader>
                {this.renderEmployees()}
              </List>
            </Paper>
          </Col>
        </Row>
      </Grid>
      
    );
  }
}

 
  

export default createContainer(() => {
  return {
    employees: Employees.find({}).fetch(),
    tasks: Tasks.find({}).fetch(),

  };
}, AssignTasks);