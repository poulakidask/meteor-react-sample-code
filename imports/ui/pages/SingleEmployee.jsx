import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Close from 'material-ui/svg-icons/content/clear';



export default class SingleEmployee extends Component {

  constructor(props) {
    super(props);
    this.callRemoveEmployee = this.callRemoveEmployee.bind(this);
  }

  callRemoveEmployee(){
      this.props.removeEmployee(this.props.employee._id);
  }

  toggleEmployeeTasks(){
      this.props.removeEmployee(this.props.employee._id);
  }

  render() {
    return (
      <ListItem
	      primaryText={this.props.employee.name}
	      leftAvatar={<Avatar src="images/avatar.png" />}
	      rightIcon={<Close onClick={this.callRemoveEmployee}/>}/>
    );
  }
}
