import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, CardSubtitle,
} from 'reactstrap';
import './Cards.css'
import garbage from './images/red_garbage.png'
import modify from './images/index.png'

const Cards = ({ value, name, photo, description, isAdmin, onDelete, onToggle, price }) => {
  return (
    <div className="Card">
      <Card body className="text-center">
        <CardImg top width="1rem" src={photo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          {!isAdmin && (
            <>
              <CardSubtitle>{price} €</CardSubtitle>
              <CardText>{description}</CardText>
              <Button>Acheter</Button>
            </>
          )}
        </CardBody>
        {isAdmin && (
          <div className="buttonCollection">
            <div className="buttonDelete" onClick={(event) => onDelete(value, event)}>
              <img src={garbage} width="30" height="30" />
            </div>
            <div className="buttonModify">
              <img src={modify} width="45" height="45" onClick={(event) => onToggle(value, event)} />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Cards
