// React and Meteor libraries
import React, { Component } from 'react';

// UI Components
import {List,ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Close from 'material-ui/svg-icons/content/clear';
import Checkbox from 'material-ui/Checkbox';

// Components
import CheckboxItem from './CheckboxItem.jsx';


export default class SingleEmployee extends Component {

  constructor(props) {
    super(props);
  }

  renderTasks(){
    return this.props.employee.tasks.map((task) => (
         <CheckboxItem key={task._id} task={task} employee={this.props.employee}/>
    ));
  }

  render() {
    return (
      <ListItem
	      leftAvatar={<Avatar src="images/avatar.png" />}>

        {this.props.employee.name}<br/>
        <List>
          {this.renderTasks()}
        </List>

        </ListItem>
    );
  }
}
