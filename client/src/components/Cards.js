import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './Cards.css'
import garbage from './images/red_garbage.png'

const Cards = ({ value, name, photo, description, isAdmin, onDelete }) => {
  return (
    <div className="Card">
      <Card body className="text-center">
        <CardImg top width="1rem" src={photo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          {!isAdmin && (<CardText>{description}</CardText>)}
          {!isAdmin && (<Button>Acheter</Button>)}
        </CardBody>
        {isAdmin && (
          <div className="buttonDelete" onClick={(event) => onDelete(value, event)}>
            <img src={garbage} width="30" height="30" />
          </div>
        )}
      </Card>
    </div>
  );
};

export default Cards
