import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './Cards.css'

const Cards = ({ name, photo, description }) => {
  return (
    <div>
      <Card>
        <CardImg top width="1rem" src={photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <Button>Acheter</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards
