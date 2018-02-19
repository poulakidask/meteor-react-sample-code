import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';


export default class LinkCard extends React.Component {

  constructor(props) {
     super(props);
 }

  render() {

    return (
      <Card className="MainCard">
              
              <CardMedia overlay={<CardTitle title={this.props.cardContent.cardTitle}  />}>
                <img src={this.props.cardContent.image} alt="" />
              </CardMedia>
              {/*<CardTitle title={this.props.cardContent.cardTitle} subtitle="Card subtitle" />
              <CardText>
                {this.props.cardContent.cardDescription}
              </CardText>*/}
              <CardActions>
                <FlatButton label="Enter" fullWidth={true} containerElement={<Link to={`/${this.props.cardContent.cardLink}`} />}  />
              </CardActions>
            </Card>
  
        );
    }
}
