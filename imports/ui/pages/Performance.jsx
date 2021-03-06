/**
     * Component for the Performance
     * Here you can mark a task as finished by clicking on the checkbox
     * Each employee gets one point for every finished task
     * The more points he/she has, the larger the name appears in the wordCloud
**/

// React and Meteor libraries
import React, { Component } from 'react';

// UI Components
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TagCloud } from "react-tagcloud";
import { createContainer } from 'meteor/react-meteor-data';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

//connect to db
import { Employees } from '../../api/employees.js';

// Components
import PerformanceEmployee from './PerformanceEmployee.jsx';



const options = {
    luminosity: 'light',
    hue: 'black'
  };

const paperStyle = {
  width: "100%",
  padding: 10,
  textAlign: 'left',
  display: 'inline-block'
};

const styles = {
    paddingTop: '2%'
  };


class Performance extends Component {

  renderData() {
        
        var data = [];
        var totalpoints = 0; 
        this.props.employees.forEach(function (employee) {

          totalpoints = 0; 
          employee.tasks.forEach(function (task) {
            if(task.finished!=null)
             {totalpoints += task.finished;}
          })

          data.push({"_id": employee._id,"value": employee.name,"count": totalpoints,"color":"white"});
        });

        return data;

    }

    renderEmployees() {
      return this.props.employees.map((employee) => (
           <PerformanceEmployee key={employee._id} employee={employee} />
      ));
    }

  render() {
    return (

      <Grid fluid style={styles}>
        <Row>
            <Col xs={6} xsOffset={3}> 
              <Paper style={paperStyle} zDepth={1}  rounded={false}>
              <Subheader><h4>Mark a task as finished and see who is the most productive!</h4></Subheader>
                {this.renderEmployees()}
              </Paper>
            </Col>
        </Row>
        <Row>
          <Col xs={4} xsOffset={4}> 
            <TagCloud minSize={10} maxSize={40} tags={this.renderData()} className="simple-cloud" colorOptions={options} shuffle={false}/>
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
}, Performance);
