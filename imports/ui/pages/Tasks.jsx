/**
     * Component for all the Tasks 
     * Here you can add and remove Tasks
**/

// react and meteor libraries
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

import SnackbarComponent from '../components/SnackbarComponent.jsx';
import SingleTask from './SingleTask.jsx';

//connect to db
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

class AllTasks extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      openSnackbar: false,
      snackbarmessage:"",
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  handleAddTask() {
    let description = this.refs.inputText.input.value;
  
    Meteor.call("addTask",description, (err) => {
        if (err) {
          SnackBar.alert("An error ocurred, please try agan.");
          this.setState({openSnackbar: true,snackbarmessage: "There was an Error!"});
          console.log(err);
          return;
        }
        else {
          this.refs.inputText.input.value="";
          this.setState({openSnackbar: true, snackbarmessage: "New Task Created"});
        }
      });

  }

  handleRemoveTask(taskId) {
    
    Meteor.call("removeTask",taskId, (err) => {
          if (err) {
            SnackBar.alert("An error ocurred, please try agan.");
            this.setState({openSnackbar: true,snackbarmessage: "There was an Error!"});
            console.log(err);
            return;
          }
          else {
            this.setState({openSnackbar: true, snackbarmessage: "Task Removed"});
          }
        });
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
         <SingleTask key={task._id} task={task} removeTask={this.handleRemoveTask} />
    ));
  }

  
  render() {
    return (
      <Grid fluid style={styles}>
        <Row>
          <Col xs={6} xsOffset={3}> 
            <Paper style={paperStyle} zDepth={1}  rounded={false}>
              <List>
                <Subheader>Tasks List</Subheader>
                {this.renderTasks()}
                <ListItem>
                    <TextField ref="inputText" hintText="" floatingLabelText="Task's description" />
                    <FlatButton label="Create Task" onClick={this.handleAddTask}  />
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
    tasks: Tasks.find({}).fetch()
  };
}, AllTasks);