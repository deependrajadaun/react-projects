 import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Course = (props) => {
  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <container className="text">

          
          
          <Button>delete</Button>
          <button>update</button>
          </container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
