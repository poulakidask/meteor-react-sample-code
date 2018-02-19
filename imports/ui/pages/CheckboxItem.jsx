import React, { Component } from 'react';
import {List,ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Close from 'material-ui/svg-icons/content/clear';
import Checkbox from 'material-ui/Checkbox';
import CheckboxItem from './CheckboxItem.jsx';


export default class CheckboxItemClass extends Component {

  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(event,checked){

    let employeeId = this.props.employee._id;
    let taskId = this.props.task._id;
    let finished = (checked?1:0);

    Meteor.call("toggleFinished",employeeId,taskId,finished);

  }

  render() {
  	let finished = (this.props.task.finished?true:false);
    return (
         <ListItem key={this.props.task._id}
          leftCheckbox={<Checkbox onCheck={this.handleCheck.bind(this)} checked={finished}/>}
          primaryText={this.props.task.description}/>
    );
  }
}
