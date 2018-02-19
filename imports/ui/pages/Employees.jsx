import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createContainer } from 'meteor/react-meteor-data';

//icons
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/content/clear';

import SnackbarComponent from '../components/SnackbarComponent.jsx';
import SingleEmployee from './SingleEmployee.jsx';

//connect to db
import { Employees } from '../../api/employees.js';

 const paperStyle = {
      width: "100%",
      padding: 10,
      textAlign: 'left',
      display: 'inline-block'
  };

  const styles = {
    paddingTop: '2%'
  };

class AllEmployees extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      openSnackbar: false,
      snackbarmessage:"",
    }
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
  }

  handleAddEmployee() {
    let name = this.refs.inputText.input.value;
  

    Meteor.call("addEmployee",name, (err) => {
        if (err) {
          SnackBar.alert("An error ocurred, please try agan.");
          this.setState({openSnackbar: true,snackbarmessage: "There was an Error!"});
          console.log(err);
          return;
        }
        else {
          this.refs.inputText.input.value="";
          this.setState({openSnackbar: true, snackbarmessage: "New Employee Created"});
        }
      });

  }

  removeEmployee(employeeId) {
    
    Meteor.call("removeEmployee",employeeId, (err) => {
          if (err) {
            SnackBar.alert("An error ocurred, please try agan.");
            this.setState({openSnackbar: true,snackbarmessage: "There was an Error!"});
            console.log(err);
            return;
          }
          else {
            this.setState({openSnackbar: true, snackbarmessage: "Employee Removed"});
          }
        });
  }

  renderEmployees() {
    return this.props.employees.map((employee) => (
         <SingleEmployee key={employee._id} employee={employee} removeEmployee={this.removeEmployee} />
    ));
  }

  
  render() {
    return (
      <Grid fluid style={styles}>
        <Row>
          <Col xs={6} xsOffset={3}> 
            <Paper style={paperStyle} zDepth={1}  rounded={false}>
              <List>
                <Subheader>Employees List</Subheader>
                {this.renderEmployees()}
                <ListItem>
                    <TextField ref="inputText" hintText="" floatingLabelText="Employee's First and Last Name" />
                    <FlatButton label="Create Employee" onClick={this.handleAddEmployee}  />
                </ListItem>
              </List>
            </Paper>

            <SnackbarComponent open={this.state.openSnackbar} snackbarmessage={this.state.snackbarmessage}/>

          </Col>
        </Row>
      </Grid>
      
    );
  }
}

 
  

export default createContainer(() => {
  return {
    employees: Employees.find({}).fetch()
  };
}, AllEmployees);