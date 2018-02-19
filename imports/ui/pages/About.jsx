import React from 'react';
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

function About() {
  return (
    <Grid fluid style={styles}>
        <Row>
            <Col xs={6} xsOffset={3}> 
              <Paper style={paperStyle} zDepth={1}  rounded={false}>
              <Subheader><h4>About</h4></Subheader>

              Step 1  Create Employees <br/>

              Step 2 Create Tasks <br/>

              Step 3 Assign Tasks to Employees <br/>

              Step 4 Marked them as finished and see which employee is the most productive.<br/>
              (Note : Each employee get 1 point for every completed task!) <br/>

              </Paper>
            </Col>
        </Row>
    </Grid>
  );
}

export default About;