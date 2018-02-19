import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import Select from 'react-select';
import { Tasks } from '../../api/tasks.js';


export default class AssignTaskEmployee extends Component {

  constructor(props) {
    super(props);
    this.state={
      isOpen: false
    }
    this.toggleChecked = this.toggleChecked.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    
  }

  toggleChecked(){
     if (this.state.isOpen) {
            this.setState({
                isOpen: false
            });
        } else {
            this.setState({
                isOpen: true
            });
        }
  }

  employeeTasks() {

      var result = '';
      if(this.props.employee.tasks!=null){
          result += this.props.employee.tasks.map((task) => ( 
                task._id
          ));
      }
      return result.toString();
  }

  allTasks(){
    return this.props.tasks.map((task) => ( 
      {value: task._id, label: task.description }
    ));
  }

  handleSelectChange (value) {
        
        var tasks= value.split(",");
        var taskList = new Array();
   
        tasks.forEach((task_id) => {
          var task = Tasks.find(task_id).fetch();
          if(task[0]!=null)
           {
            taskList.push(task[0]);
          }
        })

        Meteor.call('updateEmployeeTasks',this.props.employee._id,taskList);    

    }

  render() {
    if(this.state.isOpen)
    {
      return (
      <ListItem 
	      leftIcon={<Remove onClick={this.toggleChecked}/>}>
        {this.props.employee.name}<br/><br/>

        <Select multi simpleValue value={this.employeeTasks()} placeholder="Select your tasks" options={this.allTasks()} onChange={this.handleSelectChange} />

        </ListItem>
      );
    }
    else{
      return (
      <ListItem 
        primaryText={this.props.employee.name}
        leftIcon={<Add onClick={this.toggleChecked}/>}/>
      );

    }
  }
}
