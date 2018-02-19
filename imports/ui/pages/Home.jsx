// React and Meteor libraries
import React, { Component } from 'react';

// UI Components
import { Grid, Row, Col } from 'react-flexbox-grid';

// Components
import LinkCard from './LinkCard.jsx';

const cards = [
  {
    _id:1,
    cardTitle: 'Create / Remove Employees',
    image: 'images/usersImage.jpg',
    cardLink: 'employees',
    cardDescription: ''
  },
  {
    _id:2,
    cardTitle: 'Create / Remove Tasks',
    image: 'images/tasks.png',
    cardLink: 'tasks',
    cardDescription: ''
    
  },
  {
    _id:3,
    cardTitle: 'Assign Tasks',
    image: 'images/assigntasks.png',
    cardLink: 'assigntasks',
    cardDescription: ''
  },
  {
    _id:4,
    cardTitle: 'View Performance',
    image: 'images/charts.png',
    cardLink: 'performance',
    cardDescription: ''
  }
];

const styles = {
  paddingTop: '2%'
};



export default class Home extends React.Component {

  showCards(){
      return cards.map((card)=>(
        <Col key={card._id} xs={12} md={6} lg={3}> <LinkCard cardContent={card}/> </Col>
       ));
    }

  render() {
    return (

      <Grid fluid style={styles}>
          <Row>
            {this.showCards()}
          </Row>
      </Grid>
    );
    }
}
