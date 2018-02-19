// React and Meteor libraries
import React, { Component } from 'react';

// UI Components
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Close from 'material-ui/svg-icons/content/clear';

export default class SingleTask extends Component {

  constructor(props) {
    super(props);
    this.callRemoveTask = this.callRemoveTask.bind(this);
  }

  callRemoveTask(){
      this.props.removeTask(this.props.task._id);
  }

  render() {
    return (
      <ListItem
	      primaryText={this.props.task.description}
	      leftAvatar={<Avatar src="images/task.png" />}
	      rightIcon={<Close onClick={this.callRemoveTask}/>}/>
    );
  }
}
