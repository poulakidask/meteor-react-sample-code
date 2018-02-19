// React and Meteor libraries
import React from 'react';

// UI Components
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const paperStyle = {
  width: "100%",
  padding: 10,
  textAlign: 'left',
  display: 'inline-block'
};

const styles = {
    paddingTop: '2%'
  };


function NotFound() {
  return (
    <Grid fluid style={styles}>
        <Row>
            <Col xs={6} xsOffset={3}> 
              <Paper style={paperStyle} zDepth={1}  rounded={false}>
              <Subheader><h4>This page can not be found</h4></Subheader>
              </Paper>
            </Col>
        </Row>
    </Grid>
  );
}

export default NotFound;
